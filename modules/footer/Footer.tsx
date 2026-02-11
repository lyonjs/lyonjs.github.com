import Link from 'next/link';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a
          href="https://bsky.app/profile/lyonjs.org"
          target="_blank"
          rel="noreferrer noopener"
          title="Compte Bluesky du LyonJS"
          aria-label="Compte Bluesky du LyonJS"
        >
          @lyonjs.org
        </a>
        <Link href="/presse">Kit&nbsp;presse&nbsp;&&nbsp;Logos</Link>
      </div>
    </footer>
  );
};
