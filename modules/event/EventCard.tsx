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

export const EventCard: FC<{ event: Event }> = ({ event }) => {
  const dateParsed = dayjs(event.dateTime);
  const formattedDayAndMonth = _capitalize(dateParsed.format('dddd D MMMM YYYY à H:mm'));
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  return (
    <article className={styles.container}>
      <div>
        <span className={styles.date}>
          <Calendar /> {formattedDayAndMonth}
        </span>

        <H3 className={styles.title}>{event.title}</H3>

        {event.sponsor && (
          <p className={styles.sponsor}>
            Sponsorisé par <strong>{event.sponsor.name}</strong>
          </p>
        )}

        <div className={styles.description} style={{ display: isDescriptionExpanded ? 'block' : '-webkit-box' }}>
          <ReactMarkdown>{event.description}</ReactMarkdown>
        </div>
        <button
          type="button"
          className={styles.seeMore}
          onClick={() => setIsDescriptionExpanded((isExpanded) => !isExpanded)}
        >
          {isDescriptionExpanded ? 'Voir moins' : 'Voir plus'}
        </button>

        <ButtonLink href={event.eventUrl} target="_blank" rel="noreferrer noopener">
          <Meetup /> Participer
        </ButtonLink>
      </div>

      <div>
        <img src={event.imageUrl} alt={event.title} className={styles.picture} loading="lazy" />

        <a
          href={`http://maps.google.com/maps?q=loc:${event.venue.lat}+${event.venue.lng}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className={styles.location}>
            <Pin />

            {event.sponsor && <p className={styles.sponsor}>{event.sponsor.name}</p>}
            <p>
              {event.venue.address} · {event.venue.city}
            </p>
          </div>
        </a>
      </div>

      <EventMarkup event={event} />
    </article>
  );
};
