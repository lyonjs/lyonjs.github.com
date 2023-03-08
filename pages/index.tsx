import type { NextPage, GetStaticProps } from 'next';
import React, { FC, PropsWithChildren } from 'react';
import _merge from 'lodash/merge';
import Image from 'next/image';

import { dataOverride } from '../data/data-override';
import * as sponsors from '../data/sponsors';

import type { Event } from '../modules/event/types';
import { LyonJSHead } from '../modules/header/LyonJSHead';
import { EventCard } from '../modules/event/EventCard';
import { fetchMeetupEvents } from '../modules/meetup/api';
import { H2 as Heading2 } from '../modules/atoms/remark/Titles';
import styles from '../modules/home/Home.module.css';
import { Hero } from '../modules/home/Hero';
import { NoNextEvent } from '../modules/event/NoNextEvent';
import { ButtonLink } from '../modules/atoms/button/Button';

const Article: FC<PropsWithChildren> = ({ children }) => <article className={styles.article}>{children}</article>;

const H2: FC<PropsWithChildren> = ({ children }) => (
  <Heading2 appearance="h1" centered className={styles.secondaryTitle}>
    {children}
  </Heading2>
);

const SeePastEvents = () => (
  <ButtonLink
    variant="secondary"
    href={`/evenements-precedents/${new Date().getFullYear()}`}
    className={styles.seePastEvents}
  >
    Voir les événements passés <span aria-hidden="true">&rarr;</span>
  </ButtonLink>
);

type Props = { nextEvent: Event };

const Home: NextPage<Props> = ({ nextEvent }) => (
  <>
    <LyonJSHead />
    <main>
      <Hero />

      <Article>
        <H2>Prochain évènement</H2>
        {nextEvent ? <EventCard event={nextEvent} /> : <NoNextEvent />}
      </Article>

      <SeePastEvents />

      <Article>
        <H2>Sponsors</H2>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-12 mb-4">
          {Object.values(sponsors).map((sponsor) => (
            <a
              key={sponsor.logo}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className={sponsor.logoLight ? 'flex items-center bg-white' : 'flex items-center'}
            >
              <Image src={sponsor.logo} alt={sponsor.name} width="200" height="200" className="object-cover h-auto" />
            </a>
          ))}
        </div>
      </Article>
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
