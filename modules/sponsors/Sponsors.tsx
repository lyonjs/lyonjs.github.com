import Image from 'next/image';
import React from 'react';
import { Article, H2 } from '../home/Home.components';
import styles from './Sponsors.module.css';
import { Gift } from '../icons/Gift';
import { ButtonLink } from '../atoms/button/Button';
import { Sponsor } from '../event/types';

type Props = {
  title: string;
  sponsors: Record<string, Sponsor>;
  withLink?: boolean;
};
export const Sponsors = ({ title, sponsors, withLink }: Props) => (
  <Article>
    <H2>{title}</H2>
    <div className={styles.sponsors}>
      {Object.values(sponsors).map((sponsor) => (
        <a key={sponsor.logo} href={sponsor.url} target="_blank" rel="noopener noreferrer">
          <Image src={sponsor.logo} alt={sponsor.name} height="100" width="170" />
        </a>
      ))}
    </div>
    {withLink && (
      <ButtonLink variant="primary" href="/devenir-sponsor" className={styles.sponsorAction}>
        <Gift /> Sponsoriser un événement <span aria-hidden="true">&rarr;</span>
      </ButtonLink>
    )}
  </Article>
);
