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

type Props = { event: Event };
export const EventDetail: React.FC<Props> = ({ event }) => {
  const dateParsed = dayjs(event.dateTime);
  const formattedDayAndMonth = _capitalize(dateParsed.format('dddd D MMMM YYYY à H:mm'));
  let replays;
  let images;

  if (event.photoAlbum) {
    images = (
      <section className={styles.imageCollection}>
        <Heading Component="h2">Les images</Heading>
        <div className={styles.listImages}>
          {event.photoAlbum.photoSample.map((image) => (
            <a key={image.source} href={image.source}>
              <img loading="lazy" src={image.source} alt={event.title} />
            </a>
          ))}
        </div>
      </section>
    );
  }

  if (event.talks) {
    replays = (
      <section id="replays">
        <Heading Component="h2">Les replays</Heading>
        <div className={styles.replays}>
          {event.talks?.map((talk) => (
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
          <img src={event.imageUrl} alt="" className={styles.image} />
          <Location event={event} />
        </div>
        {images}
        {replays}
      </div>
    </>
  );
};
