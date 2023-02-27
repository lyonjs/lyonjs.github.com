import Link from 'next/link';
import React from 'react';
import styles from './year-navigation.module.css';
import { ActiveLink } from './ActiveLink';

export const YearNavigation: React.FC<{ years: string[] }> = ({ years }) => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.list}>
        {years
          .map<React.ReactNode>((year) => (
            <span key={year}>
              <ActiveLink href={`/evenements-precedents/${year}`}>{year}</ActiveLink>
            </span>
          ))
          .reduce((prev, current) => {
            return [
              prev,
              // eslint-disable-next-line react/jsx-key
              <span className={styles.separator} aria-hidden={true}>
                {' '}
                ·{' '}
              </span>,
              current,
            ];
          })}
      </div>
    </nav>
  );
};
