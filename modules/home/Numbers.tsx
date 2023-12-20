import { fetchNumbers } from '../meetup/queries/numbers.api';
import styles from './Numbers.module.css';
import { Article, H2 } from './Home.components';
import React from 'react';
import { Number } from './Number';

export const Numbers = async () => {
  const result = await fetchNumbers();

  return (
    <Article>
      <H2>Quelques chiffres</H2>
      <ul className={styles.list}>
        {result.map(({ value, text }) => (
          <Number key={text} text={text} value={value} />
        ))}
      </ul>
    </Article>
  );
};
