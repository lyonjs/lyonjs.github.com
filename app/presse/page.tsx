import { Metadata } from 'next';
import { Heading } from '../../modules/atoms/heading/Heading';
import { LogoCard } from '../../modules/press-kit/LogoCard';
import { ColorSwatch } from '../../modules/press-kit/ColorSwatch';
import { logos, brandColor, guidelines } from '../../data/press-kit';
import styles from './PressKit.module.css';

const title = 'LyonJS | Kit Presse';
const description =
  "Retrouvez les logos, couleurs et consignes d'utilisation de la marque LyonJS pour vos supports de communication.";

export const metadata: Metadata = {
  title,
  description,
  twitter: {
    title,
    description,
  },
  openGraph: {
    title,
    description,
  },
};

export default function PressePage() {
  return (
    <main>
      <Heading Component="h1">Kit Presse</Heading>
      <p className={styles.intro}>
        Retrouvez ici les ressources visuelles de LyonJS&nbsp;: logos, couleur et consignes d&apos;utilisation.
        N&apos;hésitez pas à les utiliser pour vos articles, présentations ou supports de communication.
      </p>

      <section className={styles.section}>
        <Heading Component="h2">Logos</Heading>
        <div className={styles.logoGrid}>
          {logos.map((logo) => (
            <LogoCard key={logo.name} logo={logo} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <Heading Component="h2">Couleur</Heading>
        <div className={styles.colorGrid}>
          <ColorSwatch color={brandColor} />
        </div>
      </section>

      <section className={styles.section}>
        <Heading Component="h2">Consignes d&apos;utilisation</Heading>
        <div className={styles.guidelineColumn}>
          <div className={styles.guidelineList}>
            {guidelines.map((item) => (
              <div key={item.text} className={styles.guidelineItem}>
                <span className={styles.guidelineIconDo}>&#10003;</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
