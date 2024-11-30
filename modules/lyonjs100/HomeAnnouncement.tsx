import Image from 'next/image';
import styles from './HomeAnnouncement.module.css';
import React from 'react';
import cinema from './cinema.jpg';
import { Heading } from '../atoms/heading/Heading';
import { ButtonLink } from '../atoms/button/Button';
import { Article } from '../home/Home.components';

export function HomeAnnouncement() {
  return (
    <Article>
      <div
        className={`flex flex-col grow justify-center rounded-lg p-10 mt-10 ${styles.container}`}
        style={{ backgroundColor: 'var(--background-card)', position: 'relative' }}
      >
        <Image className={styles.image} src={cinema} width={350} alt="" />
        <header className={styles.header}>
          <Heading Component="h2" appearance="h1">
            LyonJS 💯
          </Heading>
        </header>
        <div className={styles.description}>
          <p>LyonJS va fêter sa 100ème édition et ses 13 ans.</p>
          <p>
            Grâce au support de nombreux sponsors, nous vous avons concocté une conférence d'une journée. On vous
            sélectionne des talks de qualité, des speakers de renom et des surprises!
          </p>
          <p>
            100 places mises en vente le <time dateTime="2024-12-06T09:00">6 décembre 2024</time>.
          </p>
          <p>
            Une journée de conférence dans une salle de cinéma privatisée rien que pour nous et un buffet traiteur le
            midi pour se retrouver et discuter.
          </p>
          <span>
            Rendez-vous le <time dateTime="2025-02-21T09:00">21 février 2025</time> à l'
            <address>UGC de Part Dieu</address>.
          </span>
        </div>
        <div className="mt-14 flex justify-center -mb-16">
          <ButtonLink href="/lyonjs-100">
            Chope ta place ! <span aria-hidden="true">&rarr;</span>
          </ButtonLink>
        </div>
      </div>
    </Article>
  );
}
