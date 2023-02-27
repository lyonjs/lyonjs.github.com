import Image from 'next/image';
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
      <a href="https://vercel.com?utm_source=lyonjs&utm_campaign=oss">
        <Image
          alt="Vercel"
          width="200"
          height="100"
          src="https://images.ctfassets.net/e5382hct74si/78Olo8EZRdUlcDUFQvnzG7/fa4cdb6dc04c40fceac194134788a0e2/1618983297-powered-by-vercel.svg"
        />
      </a>
    </footer>
  );
};
