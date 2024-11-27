import styles from './person-card.module.css';
import Image from 'next/image';
import { IconLink } from '../navigation/links/IconLink';
import { Twitter } from '../icons/Twitter';
import { Linkedin } from '../icons/Linkedin';
import React from 'react';

type Props = {
  people: Array<{
    name: string;
    description?: string;
    avatarUrl: string;
    social: {
      twitter?: string;
      linkedin?: string;
    };
  }>;
};

export const ListOfPeople = ({ people }: Props) => {
  return (
    <ul className={styles.container}>
      {people.map((person) => (
        <li key={person.name}>
          <figure className={styles.person}>
            <Image src={person.avatarUrl} alt={person.name} width="120" height="120" title={person.name} />
            <p>{person.name}</p>
            {person.description && <p className={styles.description}>{person.description}</p>}
            <div className={styles.socials}>
              {person.social.twitter && (
                <IconLink
                  href={`https://twitter.com/${person.social.twitter}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  title={`Compte Twitter de ${person.name}`}
                >
                  <Twitter color="currentColor" size={20} />
                </IconLink>
              )}
              {person.social.linkedin && (
                <IconLink
                  href={`https://www.linkedin.com/in/${person.social.linkedin}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  title={`Compte Linkedin de ${person.name}`}
                >
                  <Linkedin color="currentColor" size={20} />
                </IconLink>
              )}
            </div>
          </figure>
        </li>
      ))}
    </ul>
  );
};
