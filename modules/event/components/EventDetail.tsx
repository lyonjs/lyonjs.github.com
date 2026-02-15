import Image from 'next/image';
import Link from 'next/link';
import { H1 } from '../../atoms/remark/Titles';
import type { Event } from '../types';
import styles from './EventDetail.module.css';
import { Calendar } from '../../icons/Calendar';
import React from 'react';
import { formatEventDate } from '../dateUtils';
import { Location } from './Location';
import { Heading } from '../../atoms/heading/Heading';
import { PhotoAlbum } from './PhotoAlbum';
import { slugTalkTitle } from '../talkSlug';

type Props = { event: Event; slug: string };

export const EventDetail: React.FC<Props> = async ({ event, slug }) => {
  const formattedDayAndMonth = formatEventDate(event.dateTime);
  const ReactMarkdown = await import('react-markdown').then((module) => module.default);
  let replays;
  let images;

  if (event.photoAlbum) {
    images = <PhotoAlbum photoAlbum={event.photoAlbum} />;
  }

  if (event.talks && event.talks.some((talk) => talk.videoLink)) {
    replays = (
      <section id="replays">
        <Heading Component="h2">Les replays</Heading>
        <ul className={styles.replays}>
          {event.talks
            .filter((talk) => talk.videoLink)
            .map((talk) => {
              const speakers = talk.speakers?.map((s) => s.name).join(', ');
              return (
                <li key={talk.title}>
                  <Link href={`/evenement/${slug}/replay/${slugTalkTitle(talk)}`} className={styles.replayLink}>
                    {talk.title}
                    {speakers && <span className={styles.replaySpeakers}> — {speakers}</span>}
                  </Link>
                </li>
              );
            })}
        </ul>
      </section>
    );
  }

  return (
    <>
      <H1 className={styles.title}>{event.title}</H1>

      {replays}

      <div className={styles.container}>
        <div className={styles.description}>
          <span className={styles.date}>
            <Calendar /> {formattedDayAndMonth}
          </span>

          <ReactMarkdown>{event.description}</ReactMarkdown>
        </div>
        <div className={styles.sideContent}>
          <Image
            src={event.featuredEventPhoto?.highResUrl ?? '/lyonjs.webp'}
            alt=""
            className={styles.image}
            width={240}
            height={150}
          />
          {event.venues && <Location venue={Array.isArray(event.venues) ? event.venues[0] : event.venues} />}
        </div>
        {images}
      </div>
    </>
  );
};
