import { Metadata } from 'next';
import { H1 } from '../../../modules/atoms/remark/Titles';
import { program, speakers } from '../../../data/lyonjs100-speakers';
import { Talk } from '../../../modules/program/Talk';
import styles from './Programme.module.css';
import { Heading } from '../../../modules/atoms/heading/Heading';

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
        {program.map((slot) => (
          <>
            <time className={styles.timeCard} dateTime={`2025-02-21T${slot.time}`} title={slot.title}>
              {slot.time}
            </time>
            {slot.speaker ? (
              <Talk speaker={slot.speaker} key={slot.time} />
            ) : (
              <article className={styles.slotCard} key={slot.time}>
                <Heading Component="h2">{slot.title}</Heading>
              </article>
            )}
          </>
        ))}
      </div>
    </main>
  );
}
