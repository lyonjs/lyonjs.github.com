import styles from './LinePlaceholder.module.css';
import { CSSProperties } from 'react';

export const LinePlaceholder = ({ width = '3rem', height = '1.2rem' }: { width?: string; height?: string }) => {
  return <div className={styles.line} style={{ '--width': width, '--height': height } as CSSProperties} />;
};
