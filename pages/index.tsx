import type { NextPage, GetStaticProps } from 'next';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import _merge from 'lodash/merge';

import { dataOverride } from '../data/data-override';
import * as sponsors from '../data/sponsors';

import type { Event } from '../modules/event/types';
import { LyonJSHead } from '../modules/header/LyonJSHead';
import { Header } from '../modules/header/Header';
import { EventCard } from '../modules/event/EventCard';
import { TitleHighlight } from '../modules/atoms/TitleHighlight';
import { ButtonPrimary, LinkPrimary } from '../modules/atoms/ButtonPrimary';
import { PastEventCard } from '../modules/event/PastEventCard';
import { fetchMeetupEvents } from '../modules/meetup/api';

const Article: React.FC<{ children: any; className?: string }> = ({ children, className }) => (
  <article className={`min-h-[400px] mb-28 ${className || ''}`}>{children}</article>
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
      <Header />
      <main>
        <h1 className="text-sm text-gray-400 my-4">
          Bienvenue au Lyon JS : la communauté lyonnaise des utilisateurs de JavaScript
        </h1>
        <Article className="flex flex-col">
          <h2 className="text-xl my-4">Prochain évènement</h2>
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
          <TitleHighlight Component="h2">Sponsors</TitleHighlight>
          <div className="grid md:grid-cols-5 grid-cols-2 gap-12 mb-4">
            {Object.values(sponsors).map((sponsor) => (
              <a
                key={sponsor.logo}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className={sponsor.logoLight ? 'flex items-center bg-white' : 'flex items-center'}
              >
                <img src={sponsor.logo} alt={sponsor.name} title={sponsor.name} className="object-cover h-auto" />
              </a>
            ))}
          </div>
        </Article>
        <Article>
          <TitleHighlight Component="h2">Evènements passés</TitleHighlight>
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
