import { FC } from 'react';
import { Article, H2 } from '../../../pages';
import { EventCard } from './EventCard';
import { NoNextEvent } from './NoNextEvent';
import { Event } from '../types';

export const NextEvent: FC<{ event: Event }> = ({ event }) => (
  <Article>
    <H2>Prochain évènement</H2>
    {event ? <EventCard event={event} /> : <NoNextEvent />}
  </Article>
);
