import { Article, H2 } from './Home.components';
import { EventCard } from '../event/components/EventCard';
import { NoNextEvent } from './NoNextEvent';
import React from 'react';
import { fetchNextEvent } from '../meetup/queries/next-event.api';
import { overrideEvent } from '../event/overrideEvent';

export const NextEvent = async () => {
  const nextEvent = overrideEvent(await fetchNextEvent());

  return (
    <Article>
      <H2>Prochain évènement</H2>
      {nextEvent ? <EventCard event={nextEvent} /> : <NoNextEvent />}
    </Article>
  );
};
