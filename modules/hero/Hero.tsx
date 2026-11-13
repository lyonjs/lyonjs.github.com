import styles from './Hero.module.css';

type Props = {
  children?: any;
  /**
   * `lazy` stops React from hoisting a `<link rel="preload">` for the lion.
   * Use it where the Hero is not the page's main content (e.g. the 404 boundary,
   * which is part of every route's tree).
   */
  imageLoading?: 'eager' | 'lazy';
};
export const Hero: React.FC<Props> = ({ children, imageLoading }) => (
  <section className={styles.hero}>
    <div className={styles.leftContainer}>{children}</div>

    <img
      src="/lion-1440.webp"
      srcSet={[360, 720, 1440].map((width) => `/lion-${width}.webp ${width}w`).join(',')}
      sizes="(max-width: 900px) 80vw, 720px"
      width={1440}
      height={810}
      alt="Lion jaune en 3D"
      loading={imageLoading}
    />
  </section>
);
