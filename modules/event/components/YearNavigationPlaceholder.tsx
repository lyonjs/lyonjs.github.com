import React from 'react';
import styles from './YearNavigation.module.css';
import { LinePlaceholder } from '../../placeholder/LinePlaceholder';
export const YearNavigationPlaceholder = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        {[1, 2, 3, 4, 5, 6].map<React.ReactNode>((year) => (
          <li key={year}>
            <LinePlaceholder />
          </li>
        ))}
      </ul>
    </nav>
  );
};
