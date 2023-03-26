import Link from 'next/link';
import React from 'react';
import styles from './year-navigation.module.css';
import { ActiveLink } from './ActiveLink';

export const YearNavigation: React.FC<{ years: string[] }> = ({ years }) => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        {years.map<React.ReactNode>((year) => (
          <li key={year}>
            <ActiveLink href={`/evenements-precedents/${year}`} aria-label={`Liste des évènements de l'année ${year}`}>
              {year}
            </ActiveLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
