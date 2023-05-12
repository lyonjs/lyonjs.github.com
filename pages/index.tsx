import type { NextPage, GetStaticProps } from 'next';
import React from 'react';

import type { Event } from '../modules/event/types';
import { LyonJSHead } from '../modules/header/LyonJSHead';
import { fetchNextEvent } from '../modules/meetup/queries/next-event.api';
import { Sponsors } from '../modules/sponsors/Sponsors';
import { Article, H2, SeePastEvents } from '../modules/home/Home.components';
import { HomeHero } from '../modules/home/HomeHero';
import { NoNextEvent } from '../modules/home/NoNextEvent';
import { EventCard } from '../modules/event/components/EventCard';
import { overrideEvent } from '../modules/event/overrideEvent';
import { fetchPastEvents } from '../modules/meetup/queries/past-events.api';
import { LastReplays } from '../modules/home/LastReplays';

type Props = { nextEvent: Event; pastEvents: Event[] };

const Home: NextPage<Props> = ({ nextEvent, pastEvents }) => (
  <>
    <LyonJSHead />
    <main>
      <HomeHero />
      <Article>
        <H2>Prochain évènement</H2>
        {nextEvent ? <EventCard event={nextEvent} /> : <NoNextEvent />}
      </Article>
      <SeePastEvents />
      <LastReplays pastEvents={pastEvents} />
      <Sponsors />
    </main>
  </>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const nextEvent = await fetchNextEvent();
  const pastEvents = await fetchPastEvents();

  return {
    props: {
      nextEvent: overrideEvent(nextEvent),
      pastEvents: pastEvents
        .map(overrideEvent)
        .filter((event) => event.talks?.some((talk) => talk.videoLink))
        .slice(0, 6),
    },
  };
};

export default Home;
