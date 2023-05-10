import React from 'react';
import styles from './YearNavigation.module.css';
import { NavLink } from '../../navigation/links/NavLink';

type Props = { years: string[] };
export const YearNavigation: React.FC<Props> = ({ years }) => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        {years.map<React.ReactNode>((year) => (
          <li key={year}>
            <NavLink
              href={`/evenements-precedents/${year}`}
              aria-label={`Liste des évènements de l'année ${year}`}
              className={styles.link}
            >
              {year}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
