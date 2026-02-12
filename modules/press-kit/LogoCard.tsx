import Image from 'next/image';
import type { LogoAsset, LogoVariant } from '../../data/press-kit';
import { CopyButton } from './CopyButton';
import { DownloadButton } from './DownloadButton';
import styles from './PressKit.module.css';

function groupVariants(variants: LogoVariant[]) {
  const vector: LogoVariant[] = [];
  const png: LogoVariant[] = [];
  const webp: LogoVariant[] = [];

  for (const v of variants) {
    if (v.format.startsWith('PNG')) png.push(v);
    else if (v.format.startsWith('WebP')) webp.push(v);
    else vector.push(v);
  }

  return [
    { label: 'Vectoriel', items: vector },
    { label: 'PNG', items: png },
    { label: 'WebP', items: webp },
  ].filter((g) => g.items.length > 0);
}

export function LogoCard({ logo }: { logo: LogoAsset }) {
  const preview = logo.variants.find((v) => v.previewPath);
  const groups = groupVariants(logo.variants);

  return (
    <div className={styles.logoCard}>
      {preview?.previewPath && (
        <div className={styles.logoPreview}>
          <Image src={preview.previewPath} alt={logo.name} width={200} height={100} style={{ objectFit: 'contain' }} />
        </div>
      )}
      <div className={styles.logoInfo}>
        <div className={styles.logoName}>{logo.name}</div>
        <div className={styles.logoDescription}>{logo.description}</div>
        {groups.map((group) => (
          <div key={group.label} className={styles.variantGroup}>
            <div className={styles.variantGroupLabel}>{group.label}</div>
            <div className={styles.variantList}>
              {group.items.map((variant) => (
                <div key={variant.format} className={styles.variantRow}>
                  <span className={styles.variantFormat}>{variant.format}</span>
                  <div className={styles.variantActions}>
                    <DownloadButton href={variant.filePath} label="Télécharger" />
                    <CopyButton path={variant.filePath} label="Copier le lien" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
