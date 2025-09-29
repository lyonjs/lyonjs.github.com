import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://twitter.com/lyonjs"
        target="_blank"
        rel="noreferrer noopener"
        title="Compte Twitter du LyonJS"
        aria-label="Compte Twitter du LyonJS"
      >
        @LyonJS
      </a>
    </footer>
  );
};
