import { Article, H2 } from './Home.components';
import { EventCard } from '../event/components/EventCard';
import { NoNextEvent } from './NoNextEvent';
import React from 'react';
import { fetchNextEvent } from '../meetup/queries/next-event.api';
import { overrideEvent } from '../event/overrideEvent';
import styles from './NextEvent.module.css';

export const NextEvent = async () => {
  const nextEvents = (await fetchNextEvent()).map(overrideEvent);

  let content = <NoNextEvent />;

  if (nextEvents && nextEvents.length) {
    content = (
      <ul>
        {nextEvents.map((event) => (
          <li className={styles.event} key={event.id}>
            <EventCard event={event} />
            <hr />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <Article>
      <H2>Prochain évènement</H2>
      {content}
    </Article>
  );
};
