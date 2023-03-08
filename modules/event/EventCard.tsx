import React, { FC, useState } from 'react';
import dayjs from 'dayjs';
import _capitalize from 'lodash/capitalize';
import type { Event } from './types';
import { ButtonLink } from '../atoms/button/Button';
import { Pin } from '../icons/Pin';
import ReactMarkdown from 'react-markdown';
import { H3 } from '../atoms/remark/Titles';
import styles from './EventCard.module.css';
import { Calendar } from '../icons/Calendar';
import { Meetup } from '../icons/Meetup';
import { EventMarkup } from './EventMarkup';
import classNames from 'classnames';

type EventProps = { event: Event };

const Location: FC<EventProps> = ({ event }) => (
  <a
    href={`http://maps.google.com/maps?q=loc:${event.venue.lat}+${event.venue.lng}`}
    target="_blank"
    rel="noreferrer noopener"
    className={styles.location}
  >
    <Pin />
    <div>
      {event.sponsor && <p className={styles.sponsor}>{event.sponsor.name}</p>}
      <span>{event.venue.address},</span>
      <span className={styles.city}>
        {event.venue.postalCode} {event.venue.city}
      </span>
    </div>
  </a>
);

const Description: FC<EventProps> = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div
        className={classNames(styles.description, {
          [styles.expanded]: isExpanded,
        })}
      >
        <ReactMarkdown>{event.description}</ReactMarkdown>
      </div>
      <button type="button" className={styles.seeMore} onClick={() => setIsExpanded((isExpanded) => !isExpanded)}>
        {isExpanded ? 'Voir moins' : 'Voir plus'}
      </button>
    </>
  );
};

export const EventCard: FC<EventProps> = ({ event }) => {
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
        <Location event={event} />
      </div>

      {event.sponsor && (
        <p className={styles.sponsoredBy}>
          Sponsorisé par <strong>{event.sponsor.name}</strong>
        </p>
      )}

      <Description event={event} />

      <ButtonLink href={event.eventUrl} target="_blank" rel="noreferrer noopener" className={styles.participate}>
        <Meetup /> Participer
      </ButtonLink>

      <EventMarkup event={event} />
    </article>
  );
};
