import { Metadata } from 'next';
import { H1 } from '../../../modules/atoms/remark/Titles';
import { speakers } from '../../../data/lyonjs100-speakers';
import { Talk } from '../../../modules/program/Talk';
import styles from './Programme.module.css';

const title = 'LyonJS | LyonJS 💯 | Programme';
const description = 'Le programme de la journée du LyonJS 100';

export const revalidate = 3600;

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

export default function LyonJS100() {
  return (
    <main>
      <H1>Programme</H1>
      <p className={styles.introduction}>
        Voici un aperçu de quelques talks au programme de cette journée, Et d’autres talks vous attendent tout au long
        de la journée ! Le programme détaillé est encore en validation.
      </p>
      <div className={styles.container}>
        {speakers.map((speaker) => (
          <Talk speaker={speaker} key={speaker.name} />
        ))}
      </div>
    </main>
  );
}
