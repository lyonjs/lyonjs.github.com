import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import { LyonJSHead } from '../../modules/header/LyonJSHead';
import { Event } from '../../modules/event/types';
import _uniq from 'lodash/uniq';
import { ParsedUrlQuery } from 'querystring';
import { H1 } from '../../modules/atoms/remark/Titles';
import { YearNavigation } from '../../modules/event/components/YearNavigation';
import { EventTile } from '../../modules/event/components/EventTile';
import Link from 'next/link';
import { slugEventTitle } from '../../modules/event/eventSlug';
import { fetchYearsWithMeetups } from '../../modules/meetup/queries/years-with-meetups';
import { fetchPastEvents } from '../../modules/meetup/queries/past-events.api';
import { overrideEvent } from '../../modules/event/overrideEvent';

const Event: NextPage<{ pastEvents: Event[]; years: string[]; year: string }> = ({ pastEvents, years, year }) => {
  return (
    <>
      <LyonJSHead
        title={`LyonJS | Évènements ${year}`}
        description={`Liste des évènements LyonJS de l'année ${year}, meetup, apéros, conférences et rassemblement, retrouver tous les liens depuis notre création.`}
      />
      <main>
        <H1>Évènements précédents</H1>

        <YearNavigation years={years} />

        <ul data-testid="past-events-list">
          {pastEvents.map((event) => (
            <li key={event.eventUrl}>
              <Link href={`/evenement/${slugEventTitle(event)}`}>
                <EventTile event={event} />
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const years = await fetchYearsWithMeetups();

  return {
    paths: Array.from(years).map((year) => ({ params: { year } })),
    fallback: false,
  };
};

interface Params extends ParsedUrlQuery {
  year: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pastEvents = await fetchPastEvents();
  const { year } = context.params as Params;
  const yearsFromEvents: string[] = pastEvents
    .map((event) => new Date(event.dateTime).getFullYear())
    .map((year) => year.toString());
  const years = _uniq(yearsFromEvents);

  return {
    props: {
      year,
      years,
      pastEvents: pastEvents
        .map(overrideEvent)
        .filter((event) => new Date(event.dateTime).getFullYear().toString() === year),
    },
  };
};

export default Event;
