import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import { LyonJSHead } from '../../modules/header/LyonJSHead';
import { Event } from '../../modules/event/types';
import { dataOverride } from '../../data/data-override';
import _merge from 'lodash/merge';
import _uniq from 'lodash/uniq';
import { fetchMeetupEvents } from '../../modules/meetup/api';
import { ParsedUrlQuery } from 'querystring';
import { H1 } from '../../modules/atoms/remark/Titles';
import { YearNavigation } from '../../modules/event/past-events/YearNaviation';
import { EventTile } from '../../modules/event/past-events/EventTile';
import Link from 'next/link';

const Event: NextPage<{ pastEvents: Event[]; years: string[]; year: string }> = ({ pastEvents, years, year }) => {
  return (
    <>
      <LyonJSHead
        title={`LyonJS | Évènements ${year}`}
        description={`Liste des évènements LyonJS de l'année ${year}, meetup, apéros, conférences et rassemblement, retrouver tous les liens depuis notre création.`}
      />
      <main>
        <H1>Évènements</H1>

        <YearNavigation years={years} />

        {pastEvents.map((event) => (
          <Link key={event.eventUrl} href={`/evenement/${event.id}`}>
            <EventTile event={event} />
          </Link>
        ))}
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

export const getStaticPaths: GetStaticPaths = async () => {
  const { pastEvents } = await fetchMeetupEvents();
  const yearsFromEvents: string[] = pastEvents
    .map((event) => new Date(event.dateTime).getFullYear())
    .map((year) => year.toString());
  const years = _uniq(yearsFromEvents);

  return {
    paths: years.map((year) => ({ params: { year } })),
    fallback: false,
  };
};

interface Params extends ParsedUrlQuery {
  year: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { pastEvents } = await fetchMeetupEvents();
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
