'use client';
import Image from 'next/image';
import { H1 } from '../../atoms/remark/Titles';
import type { Event } from '../types';
import styles from './EventDetail.module.css';
import ReactMarkdown from 'react-markdown';
import { Calendar } from '../../icons/Calendar';
import React from 'react';
import dayjs from 'dayjs';
import _capitalize from 'lodash/capitalize';
import { Location } from './Location';
import { Heading } from '../../atoms/heading/Heading';
import { PhotoAlbum } from './PhotoAlbum';

type Props = { event: Event };

export const EventDetail: React.FC<Props> = ({ event }) => {
  const dateParsed = dayjs(event.dateTime);
  const formattedDayAndMonth = _capitalize(dateParsed.format('dddd D MMMM YYYY à H:mm'));
  let replays;
  let images;

  if (event.photoAlbum) {
    images = <PhotoAlbum photoAlbum={event.photoAlbum} />;
  }

  if (event.talks && event.talks.some((talk) => talk.videoLink)) {
    replays = (
      <section id="replays">
        <Heading Component="h2">Les replays</Heading>
        <div className={styles.replays}>
          {event.talks
            .filter((talk) => talk.videoLink)
            .map((talk) => (
              <iframe key={talk.title} width="100%" height="auto" src={talk.videoLink} loading="lazy" />
            ))}
        </div>
      </section>
    );
  }

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
        <div className={styles.sideContent}>
          <Image src={event.imageUrl} alt="" className={styles.image} width={240} height={150} />
          {event.venue && <Location venue={event.venue} />}
        </div>
        {replays}
        {images}
      </div>
    </>
  );
};
