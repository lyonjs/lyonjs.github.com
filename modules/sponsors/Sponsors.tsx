import * as sponsors from '../../data/sponsors';
import Image from 'next/image';
import React from 'react';
import { Article, H2 } from '../../pages';
import styles from './Sponsors.module.css';

export const Sponsors = () => (
  <Article>
    <H2>Sponsors</H2>
    <div className={styles.sponsors}>
      {Object.values(sponsors).map((sponsor) => (
        <a key={sponsor.logo} href={sponsor.url} target="_blank" rel="noopener noreferrer">
          <Image src={sponsor.logo} alt={sponsor.name} height="100" width="150" />
        </a>
      ))}
    </div>
  </Article>
);
