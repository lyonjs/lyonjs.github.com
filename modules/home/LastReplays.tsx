import React from 'react';
import { Article, H2 } from './Home.components';
import styles from './LastReplays.module.css';
import type { Event, Talk } from '../event/types';
import Link from 'next/link';
import { slugEventTitle } from '../event/eventSlug';
import { slugTalkTitle } from '../event/talkSlug';
import { youtubeVideoId } from '../event/youtubeUtils';
import { fetchPastEvents } from '../meetup/queries/past-events.api';
import { overrideEvent } from '../event/overrideEvent';
import Image from 'next/image';

type Item = {
  event: Event;
  talk: Talk;
  videoId: string;
};

export const LastReplays = async () => {
  const pastEvents = await fetchPastEvents();
  const replayLinks: Item[] = pastEvents
    .map(overrideEvent)
    .reduce((accumulator: Item[], event: Event) => {
      const newEvents = event.talks
        ?.filter((talk: Talk) => talk.videoLink)
        .map((talk: Talk) => ({
          talk,
          event,
          videoId: youtubeVideoId(talk.videoLink!)!,
        }));
      accumulator.push(...((newEvents || []) as Item[]));

      return accumulator;
    }, [])
    .slice(0, 6);

  return (
    <Article>
      <H2>Nos derniers replays</H2>
      <div className={styles.grid}>
        {replayLinks.map(({ talk, event, videoId }) => (
          <Link
            key={talk?.title || event.id}
            href={`/evenement/${slugEventTitle(event)}/replay/${slugTalkTitle(talk)}`}
          >
            <Image
              loading="lazy"
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt={talk?.title}
              width={320}
              height={180}
            />
            <span className={styles.talkTitle}>{talk.title}</span>
          </Link>
        ))}
      </div>
    </Article>
  );
};
