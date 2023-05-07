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

type Props = { nextEvent: Event };

const Home: NextPage<Props> = ({ nextEvent }) => (
  <>
    <LyonJSHead />
    <main>
      <HomeHero />
      <Article>
        <H2>Prochain évènement</H2>
        {nextEvent ? <EventCard event={nextEvent} /> : <NoNextEvent />}
      </Article>
      <SeePastEvents />
      <Sponsors />
    </main>
  </>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const nextEvent = await fetchNextEvent();

  return {
    props: {
      nextEvent: overrideEvent(nextEvent),
    },
  };
};

export default Home;
