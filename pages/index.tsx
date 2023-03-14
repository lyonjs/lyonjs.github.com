import type { NextPage, GetStaticProps } from 'next';
import React from 'react';
import _merge from 'lodash/merge';

import { dataOverride } from '../data/data-override';
import type { Event } from '../modules/event/types';
import { LyonJSHead } from '../modules/header/LyonJSHead';
import { fetchMeetupEvents } from '../modules/meetup/api';
import { Hero } from '../modules/home/Hero';
import { Sponsors } from '../modules/sponsors/Sponsors';
import { NextEvent } from '../modules/event/next-event/NextEvent';
import { SeePastEvents } from '../modules/home/Home.components';

type Props = { nextEvent: Event };

const Home: NextPage<Props> = ({ nextEvent }) => (
  <>
    <LyonJSHead />
    <main>
      <Hero />
      <NextEvent event={nextEvent} />
      <SeePastEvents />
      <Sponsors />
    </main>
  </>
);

const overrideEvent = (event: Event): Event => {
  if (event && dataOverride[event.eventUrl]) {
    return _merge(event, dataOverride[event.eventUrl]);
  }
  return event;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { nextEvent } = await fetchMeetupEvents();

  return {
    props: {
      nextEvent: overrideEvent(nextEvent),
    },
  };
};

export default Home;
