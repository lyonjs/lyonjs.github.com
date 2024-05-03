import * as sponsors from '../../data/sponsors';
import Image from 'next/image';
import React from 'react';
import { Article, H2 } from '../home/Home.components';
import styles from './Sponsors.module.css';
import { Gift } from '../icons/Gift';
import { ButtonLink } from '../atoms/button/Button';

export const Sponsors = () => (
  <Article>
    <H2>Sponsors</H2>
    <div className={styles.sponsors}>
      {Object.values(sponsors).map((sponsor) => (
        <a key={sponsor.logo} href={sponsor.url} target="_blank" rel="noopener noreferrer">
          <Image src={sponsor.logo} alt={sponsor.name} height="100" width="170" />
        </a>
      ))}
    </div>
    <ButtonLink variant="primary" href="/devenir-sponsor" className={styles.sponsorAction}>
      <Gift /> Sponsoriser un événement <span aria-hidden="true">&rarr;</span>
    </ButtonLink>
  </Article>
);
