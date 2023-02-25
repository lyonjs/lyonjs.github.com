import React from 'react';
import Image from 'next/image';
import styles from './Orgas.module.css';
import { Twitter } from '../icons/Twitter';
import { Linkedin } from '../icons/Linkedin';
import { orgas } from '../../data/orgas';
import { IconLink } from '../navigation/links/IconLink';

export const Orgas: React.FC = () => (
  <div className={styles.listOrgasContainer}>
    {orgas.map((orga) => (
      <figure key={orga.name} className={styles.member}>
        <Image src={orga.avatarUrl} alt={orga.name} width="120" height="120" title={orga.name} />
        {orga.name}
        <figcaption>
          {orga.social.twitter && (
            <IconLink
              href={`https://twitter.com/${orga.social.twitter}`}
              target="_blank"
              rel="noreferrer noopener"
              title={`Compte Twitter de ${orga.name}`}
            >
              <Twitter color="currentColor" size={24} />
            </IconLink>
          )}
          {orga.social.linkedin && (
            <IconLink
              href={`https://www.linkedin.com/in/${orga.social.linkedin}`}
              target="_blank"
              rel="noreferrer noopener"
              title={`Compte Linkedin de ${orga.name}`}
            >
              <Linkedin color="currentColor" size={24} />
            </IconLink>
          )}
        </figcaption>
      </figure>
    ))}
  </div>
);
