import React, { FC } from 'react';
import va from '@vercel/analytics';
import dayjs from 'dayjs';
import _capitalize from 'lodash/capitalize';
import type { Event } from '../types';
import { ButtonLink } from '../../atoms/button/Button';
import ReactMarkdown from 'react-markdown';
import { H3 } from '../../atoms/remark/Titles';
import styles from './EventCard.module.css';
import { Calendar } from '../../icons/Calendar';
import { Meetup } from '../../icons/Meetup';
import { EventMarkup } from './EventMarkup';
import { Collapsible } from '../../atoms/collapsible/Collapsible';
import { Location } from './Location';

type Props = { event: Event };

export const EventCard: FC<Props> = ({ event }) => {
  const dateParsed = dayjs(event.dateTime);
  const formattedDayAndMonth = _capitalize(dateParsed.format('dddd D MMMM YYYY à H:mm'));

  return (
    <article className={styles.container}>
      <H3 className={styles.title}>{event.title}</H3>

      <span className={styles.date}>
        <Calendar /> {formattedDayAndMonth}
      </span>

      <div className={styles.venue}>
        <img src={event.imageUrl} alt={event.title} className={styles.picture} loading="lazy" />
        <Location event={event} className={styles.location} />
      </div>

      {event.sponsor && (
        <p className={styles.sponsoredBy}>
          Sponsorisé par <strong>{event.sponsor.name}</strong>
        </p>
      )}

      <Collapsible className={styles.description}>
        <ReactMarkdown>{event.description}</ReactMarkdown>
      </Collapsible>

      <ButtonLink
        href={event.eventUrl}
        target="_blank"
        rel="noreferrer noopener"
        className={styles.participate}
        onClick={() => va.track('NextEventRegister', { eventUrl: event.eventUrl })}
      >
        <Meetup /> Participer
      </ButtonLink>

      <EventMarkup event={event} />
    </article>
  );
};
