'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';
import _capitalize from 'lodash/capitalize';
import type { Event } from '../types';
import { ButtonLink } from '../../atoms/button/Button';
import { H3 } from '../../atoms/remark/Titles';
import styles from './EventCard.module.css';
import { Calendar } from '../../icons/Calendar';
import { Meetup } from '../../icons/Meetup';
import { EventMarkup } from './EventMarkup';
import { Collapsible } from '../../atoms/collapsible/Collapsible';
import { Location } from './Location';
import dynamic from 'next/dynamic';

type Props = { event: Event };

const ReactMarkdown = dynamic(() => import('react-markdown').then((module) => module.default));

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
        <Image
          src={event.featuredEventPhoto?.highResUrl ?? '/lyonjs.webp'}
          alt={event.title}
          className={styles.picture}
          loading="lazy"
          width={230}
          height={130}
        />
        {event.venues && (
          <Location venue={Array.isArray(event.venues) ? event.venues[0] : event.venues} className={styles.location} />
        )}
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
      >
        <Meetup /> {event.rsvps.yesCount ? `Rejoindre les ${event.rsvps.yesCount} participant·e·s` : 'Participez'}
      </ButtonLink>

      <EventMarkup event={event} />
    </article>
  );
};
