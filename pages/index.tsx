import type { NextPage, GetStaticProps } from 'next';
import React, { FC, PropsWithChildren, useState } from 'react';
import dayjs from 'dayjs';
import _merge from 'lodash/merge';
import Image from 'next/image';

import { dataOverride } from '../data/data-override';
import * as sponsors from '../data/sponsors';

import type { Event } from '../modules/event/types';
import { LyonJSHead } from '../modules/header/LyonJSHead';
import { EventCard } from '../modules/event/EventCard';
import { ButtonPrimary } from '../modules/atoms/ButtonPrimary';
import { PastEventCard } from '../modules/event/PastEventCard';
import { fetchMeetupEvents } from '../modules/meetup/api';
import { H1, H2 as Heading2 } from '../modules/atoms/remark/Titles';
import styles from '../modules/home/Home.module.css';

const Article: FC<PropsWithChildren> = ({ children }) => <article className={styles.article}>{children}</article>;

const H2: FC<PropsWithChildren> = ({ children }) => (
  <Heading2 appearance="h1" centered className={styles.secondaryTitle}>
    {children}
  </Heading2>
);

type Props = { nextEvent: Event; pastEvents: Event[] };
const thisYear = dayjs().year();
const Home: NextPage<Props> = ({ nextEvent, pastEvents }) => {
  const [displayedYearEvents, setDisplayedYearEvents] = useState(thisYear);
  const displayedLastEvents = pastEvents.filter((event) => dayjs(event.dateTime).year() >= displayedYearEvents);
  const displayPreviousYearEvents = () => {
    setDisplayedYearEvents(displayedYearEvents - 1);
  };

  return (
    <>
      <LyonJSHead />
      <main>
        <H1 className={styles.mainTitle}>
          Bienvenue au Lyon JS : la communauté lyonnaise des utilisateurs de JavaScript
        </H1>
        <Article>
          <H2>Prochain évènement</H2>
          {nextEvent ? (
            <EventCard event={nextEvent} />
          ) : (
            <div className="flex flex-col grow justify-center">
              <p className="text-center">Pas de prochain LyonJS de trouvé !</p>
              <p className="text-center">Reviens dans quelques jours, le prochain évènement ne saurait tarder.</p>
            </div>
          )}
        </Article>
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
        <Article>
          <H2>Evènements passés</H2>
          {displayedLastEvents?.map((it) => (
            <PastEventCard event={it} key={it.eventUrl} />
          ))}
          {displayedLastEvents.length !== pastEvents.length && (
            <div className="flex justify-center">
              <ButtonPrimary onClick={displayPreviousYearEvents}>
                Afficher les évènements de {displayedYearEvents - 1}
              </ButtonPrimary>
            </div>
          )}
        </Article>
      </main>
    </>
  );
};

const overrideEvent = (event: Event): Event => {
  if (event && dataOverride[event.eventUrl]) {
    return _merge(event, dataOverride[event.eventUrl]);
  }
  return event;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { nextEvent, pastEvents } = await fetchMeetupEvents();

  return {
    props: {
      nextEvent: overrideEvent(nextEvent),
      pastEvents: pastEvents.map(overrideEvent),
    },
  };
};

export default Home;
