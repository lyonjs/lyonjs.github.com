'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './PressKit.module.css';

const backgrounds = [
  { label: 'Damier', className: styles.previewCheckerboard },
  { label: 'Noir', className: styles.previewBlack },
  { label: 'Blanc', className: styles.previewWhite },
] as const;

export function LogoPreview({ src, alt }: { src: string; alt: string }) {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  return (
    <div className={`${styles.logoPreview} ${backgrounds[backgroundIndex].className}`}>
      <Image src={src} alt={alt} width={200} height={100} style={{ objectFit: 'contain' }} />
      <div className={styles.backgroundToggleGroup}>
        {backgrounds.map((background, index) => (
          <button
            key={background.label}
            className={`${styles.backgroundToggle} ${index === backgroundIndex ? styles.backgroundToggleActive : ''}`}
            onClick={() => setBackgroundIndex(index)}
            aria-label={`Fond ${background.label}`}
            aria-pressed={index === backgroundIndex}
          >
            {background.label}
          </button>
        ))}
      </div>
    </div>
  );
}