'use client';

import { useState } from 'react';
import { Copy } from '../icons/Copy';
import { Check } from '../icons/Check';
import styles from './PressKit.module.css';

export function CopyButton({ value, label = 'Copier le lien' }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button type="button" className={`${styles.actionButton} ${copied ? styles.copied : ''}`} onClick={handleCopy}>
      {copied ? (
        <>
          <Check size={14} /> Copié !
        </>
      ) : (
        <>
          <Copy size={14} /> {label}
        </>
      )}
    </button>
  );
}
