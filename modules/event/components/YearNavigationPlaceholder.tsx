import React from 'react';
import styles from './YearNavigation.module.css';
import { LinePlaceholder } from '../../placeholder/LinePlaceholder';
export const YearNavigationPlaceholder = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        {Array.from({ length: 7 }).map((_, key) => (
          <li key={key}>
            <LinePlaceholder />
          </li>
        ))}
      </ul>
    </nav>
  );
};
