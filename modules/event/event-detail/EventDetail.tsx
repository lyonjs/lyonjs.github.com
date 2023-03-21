import { H1 } from '../../atoms/remark/Titles';
import type { Event } from '../types';
import styles from './EventDetail.module.css';
import ReactMarkdown from 'react-markdown';
import { Calendar } from '../../icons/Calendar';
import React from 'react';
import dayjs from 'dayjs';
import _capitalize from 'lodash/capitalize';

export const EventDetail: React.FC<{ event: Event }> = ({ event }) => {
  const dateParsed = dayjs(event.dateTime);
  const formattedDayAndMonth = _capitalize(dateParsed.format('dddd D MMMM YYYY à H:mm'));

  return (
    <>
      <H1 className={styles.title}>{event.title}</H1>

      <div className={styles.container}>
        <div className={styles.description}>
          <span className={styles.date}>
            <Calendar /> {formattedDayAndMonth}
          </span>

          <ReactMarkdown>{event.description}</ReactMarkdown>
        </div>
        <img src={event.imageUrl} alt="" className={styles.image} />
      </div>
    </>
  );
};
