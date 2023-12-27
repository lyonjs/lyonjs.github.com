import React, { FC, useMemo } from 'react';
import { Article, H2 } from './Home.components';
import styles from './LastReplays.module.css';
import type { Event, Talk } from '../event/types';
import Link from 'next/link';
import { slugEventTitle } from '../event/eventSlug';
import { fetchPastEvents } from '../meetup/queries/past-events.api';
import { overrideEvent } from '../event/overrideEvent';

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
      const newEvents = event.talks?.map((talk: Talk) => ({
        talk,
        event,
        videoId: talk.videoLink?.split(/embed\//)[1],
      })) as Item[];
      return [...accumulator, ...(newEvents || [])] as Item[];
    }, [])
    .slice(0, 6);

  return (
    <Article>
      <H2>Nos derniers replays</H2>
      <div className={styles.grid}>
        {replayLinks.map(({ talk, event, videoId }) => (
          <Link key={event.id} href={`/evenement/${slugEventTitle(event)}#replays`}>
            <img src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} alt={talk?.title} />
          </Link>
        ))}
      </div>
    </Article>
  );
};
