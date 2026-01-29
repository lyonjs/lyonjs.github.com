import styles from './HomeAnnouncement.module.css';
import React from 'react';
import { ButtonLink } from '../atoms/button/Button';
import { Article, H2 } from '../home/Home.components';

export function HomeAnnouncement() {
  return (
    <Article>
      <H2>LyonJS 💯</H2>
      <div
        className={`flex flex-col grow justify-center rounded-lg p-10 pt-20 mt-10 ${styles.container}`}
        style={{ backgroundColor: 'var(--background-card)', position: 'relative' }}
      >
        <div className={styles.description}>
          <p>LyonJS a fêté sa 100ème édition et ses 13 ans.</p>
          <p>
            Grâce au support de nombreux sponsors, nous vous avons concocté une conférence d'une journée. On vous a
            sélectionné des talks de qualité, des speakers de renom et des surprises!
          </p>
          <p>
            Une journée de conférence dans une salle de cinéma privatisée rien que pour nous et un buffet traiteur le
            midi pour se retrouver et discuter.
          </p>
        </div>
        <div className={styles.cta}>
          <ButtonLink href="/lyonjs-100">
            Retrouvez les replays ! <span aria-hidden="true">&rarr;</span>
          </ButtonLink>
        </div>
      </div>
    </Article>
  );
}
