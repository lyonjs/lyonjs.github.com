import { Download } from '../icons/Download';
import styles from './PressKit.module.css';

export function DownloadButton({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} download className={styles.actionButton}>
      <Download size={14} /> {label}
    </a>
  );
}
