'use client';

import { useState } from 'react';
import { Copy } from '../icons/Copy';
import { Check } from '../icons/Check';
import styles from './PressKit.module.css';

export function CopyButton({
  value,
  path,
  label = 'Copier le lien',
}: {
  value?: string;
  path?: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = path ? `${window.location.origin}${path}` : (value ?? '');
    await navigator.clipboard.writeText(text);
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
