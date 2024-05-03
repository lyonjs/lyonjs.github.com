import styles from './Hero.module.css';

type Props = {
  children?: any;
};
export const Hero: React.FC<Props> = ({ children }) => (
  <section className={styles.hero}>
    <div className={styles.leftContainer}>{children}</div>

    <img
      src="/lion-1440.webp"
      srcSet={[360, 720, 1440].map((width) => `/lion-${width}.webp ${width}w`).join(',')}
      sizes="(max-width: 900px) 80vw, 720px"
      width={1440}
      height={810}
      alt="Lion jaune en 3D"
    />
  </section>
);
