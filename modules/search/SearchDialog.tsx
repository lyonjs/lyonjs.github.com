'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type Fuse from 'fuse.js';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search } from '../icons/Search';
import styles from './SearchDialog.module.css';

type SearchIndexEntry = {
  id: string;
  title: string;
  dateTime: string;
  slug: string;
  description?: string;
  talks?: Array<{ title: string; speakers?: Array<{ name: string }> }>;
  sponsor?: string;
};

const dateFormatter = new Intl.DateTimeFormat('fr-FR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

function getSpeakers(entry: SearchIndexEntry) {
  if (!entry.talks) return '';
  const speakers = entry.talks.flatMap((t) => t.speakers?.map((s) => s.name) || []);
  return speakers.join(', ');
}

function formatDate(dateTime: string) {
  try {
    return dateFormatter.format(new Date(dateTime));
  } catch {
    return '';
  }
}

export const SearchDialog = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchIndexEntry[]>([]);
  const [index, setIndex] = useState<SearchIndexEntry[] | null>(null);
  const [loading, setLoading] = useState(false);

  const fuseRef = useRef<Fuse<SearchIndexEntry> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Scroll lock
  useEffect(() => {
    document.body.toggleAttribute('data-lock-scroll', open);
    return () => {
      document.body.removeAttribute('data-lock-scroll');
    };
  }, [open]);

  // Keyboard shortcut: Ctrl/Cmd+K to open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Load index + Fuse.js on first open
  useEffect(() => {
    if (!open || index) return;

    setLoading(true);
    Promise.all([
      fetch('/search-index.json').then((r) => r.json() as Promise<SearchIndexEntry[]>),
      import('fuse.js'),
    ]).then(([data, FuseModule]) => {
      const Fuse = FuseModule.default;
      setIndex(data);
      fuseRef.current = new Fuse(data, {
        keys: [
          { name: 'title', weight: 2 },
          { name: 'talks.title', weight: 1.5 },
          { name: 'talks.speakers.name', weight: 1.5 },
          { name: 'description', weight: 0.5 },
          { name: 'sponsor', weight: 0.8 },
        ],
        threshold: 0.3,
        includeScore: true,
      });
      setLoading(false);
    });
  }, [open, index]);

  // Focus input when dialog opens
  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus());
    } else {
      setQuery('');
      setResults([]);
    }
  }, [open]);

  // Debounced search
  const search = useCallback((value: string) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      if (!fuseRef.current || !value.trim()) {
        setResults([]);
        return;
      }
      const fuseResults = fuseRef.current.search(value, { limit: 20 });
      setResults(fuseResults.map((r) => r.item));
    }, 200);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    search(value);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      setOpen(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  return (
    <>
      <button className={styles.searchButton} onClick={() => setOpen(true)} aria-label="Rechercher" type="button">
        <Search size={20} />
        <kbd className={styles.kbd}>⌘K</kbd>
      </button>

      {open && (
        <div
          className={styles.overlay}
          ref={overlayRef}
          onClick={handleOverlayClick}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-label="Rechercher un événement"
          aria-modal="true"
        >
          <div className={styles.container}>
            <div className={styles.inputWrapper}>
              <Search size={18} className={styles.inputIcon} />
              <input
                ref={inputRef}
                className={styles.input}
                type="search"
                placeholder="Rechercher un événement, un talk, un speaker..."
                value={query}
                onChange={handleInputChange}
                aria-label="Rechercher"
              />
            </div>

            <div className={styles.results}>
              {loading && <div className={styles.emptyState}>Chargement...</div>}

              {!loading && query && results.length === 0 && (
                <div className={styles.emptyState}>Aucun résultat pour &laquo; {query} &raquo;</div>
              )}

              {results.map((entry) => {
                const speakers = getSpeakers(entry);
                return (
                  <Link
                    key={entry.id}
                    href={`/evenement/${entry.slug}`}
                    className={styles.resultItem}
                    onClick={() => setOpen(false)}
                  >
                    <div className={styles.resultTitle}>{entry.title}</div>
                    <div className={styles.resultMeta}>
                      <span>{formatDate(entry.dateTime)}</span>
                      {speakers && <span>{speakers}</span>}
                      {entry.sponsor && <span>{entry.sponsor}</span>}
                    </div>
                  </Link>
                );
              })}

              {!loading && !query && index && (
                <div className={styles.emptyState}>Tapez pour rechercher parmi {index.length} événements</div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
