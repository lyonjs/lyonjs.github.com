import type { NextPage, GetStaticProps } from 'next';
import React, { FC, PropsWithChildren } from 'react';
import _merge from 'lodash/merge';

import { dataOverride } from '../data/data-override';

import type { Event } from '../modules/event/types';
import { LyonJSHead } from '../modules/header/LyonJSHead';
import { fetchMeetupEvents } from '../modules/meetup/api';
import { H2 as Heading2 } from '../modules/atoms/remark/Titles';
import styles from '../modules/home/Home.module.css';
import { Hero } from '../modules/home/Hero';
import { ButtonLink } from '../modules/atoms/button/Button';
import { Sponsors } from '../modules/sponsors/Sponsors';
import { NextEvent } from '../modules/event/next-event/NextEvent';

export const Article: FC<PropsWithChildren> = ({ children }) => (
  <article className={styles.article}>{children}</article>
);

export const H2: FC<PropsWithChildren> = ({ children }) => (
  <Heading2 appearance="h1" centered className={styles.secondaryTitle}>
    {children}
  </Heading2>
);

const SeePastEvents = () => (
  <div className={styles.seePastEvents}>
    <ButtonLink variant="secondary" href={`/evenements-precedents/${new Date().getFullYear()}`}>
      Voir les événements passés <span aria-hidden="true">&rarr;</span>
    </ButtonLink>
  </div>
);

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
