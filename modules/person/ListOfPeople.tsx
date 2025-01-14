import styles from './person-card.module.css';
import React from 'react';
import { Person } from './types';
import { PersonDisplay } from './PersonDisplay';

type Props = {
  people: Array<Person>;
};

export const ListOfPeople = ({ people }: Props) => {
  return (
    <ul className={styles.container}>
      {people.map((person) => (
        <li key={person.name}>
          <PersonDisplay person={person} />
        </li>
      ))}
    </ul>
  );
};
