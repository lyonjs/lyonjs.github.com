import React from 'react';
import styles from './event-card.module.css';
import dayjs from 'dayjs';
import type { Event } from './types';

export const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  const formattedDate = dayjs(event.dateTime).format('DD MMM YYYY');
  return (
    <article className="shadow-lg border-solid border-2 border-indigo-600 rounded-md">
      <div className={styles.date}>{formattedDate}</div>
    </article>
  );
};
