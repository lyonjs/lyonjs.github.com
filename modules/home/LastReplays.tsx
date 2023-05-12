import React, { FC, useMemo } from 'react';
import { Article, H2 } from './Home.components';
import styles from './LastReplays.module.css';
import type { Event, Talk } from '../event/types';
import Link from 'next/link';
import { slugEventTitle } from '../event/eventSlug';
import { fetchPastEvents } from '../meetup/queries/past-events.api'

type Item = {
  event: Event;
  talk: Talk;
  videoId: string;
};

export const LastReplays = async () => {
  const pastEvents = await fetchPastEvents();
  const replayLinks: Item[] = pastEvents.reduce((accumulator: Item[], event: Event) => {
    const newEvents = event.talks?.map((talk: Talk) => ({
      talk,
      event,
      videoId: talk.videoLink?.split(/embed\//)[1],
    })) as Item[];
    return [...accumulator, ...newEvents] as Item[];
  }, []);

  return (
    <Article>
      <H2>Nos derniers replays</H2>
      <div className={styles.grid}>
        {replayLinks.map(({ talk, event, videoId }) => (
          <Link href={`/evenement/${slugEventTitle(event)}`} key={talk?.title}>
            <img src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt={talk?.title} />
          </Link>
        ))}
      </div>
    </Article>
  );
};
