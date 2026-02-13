import type { BrandColor } from '../../data/press-kit';
import { CopyButton } from './CopyButton';
import styles from './PressKit.module.css';

export function ColorSwatch({ color }: { color: BrandColor }) {
  return (
    <div className={styles.colorSwatch}>
      <div className={styles.swatchPreview} style={{ backgroundColor: color.hex }} />
      <div className={styles.swatchInfo}>
        <div className={styles.swatchName}>{color.name}</div>
        <div className={styles.swatchDescription}>{color.description}</div>
        <div className={styles.swatchValues}>
          <div className={styles.swatchValue}>
            <span>{color.hex}</span>
            <CopyButton value={color.hex} label="Copier" />
          </div>
          <div className={styles.swatchValue}>
            <span>{color.hsl}</span>
            <CopyButton value={color.hsl} label="Copier" />
          </div>
        </div>
      </div>
    </div>
  );
}
