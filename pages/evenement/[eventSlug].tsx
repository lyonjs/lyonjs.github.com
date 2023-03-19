import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { fetchMeetupEvents } from '../../modules/meetup/api';
import { ParsedUrlQuery } from 'querystring';
import { LyonJSHead } from '../../modules/header/LyonJSHead';
import { Event } from '../../modules/event/types';
import { H1 } from '../../modules/atoms/remark/Titles';
import React from 'react';
import { parserEventIdFromSlug, slugEventTitle } from '../../modules/event/eventSlug';

const EventPage: NextPage<{ event: Event }> = ({ event }) => {
  return (
    <>
      <LyonJSHead
        title={`LyonJS | ${event.title}`}
        description={`Évènement LyonJS: ${event.shortDescription || event.description.slice(0, 250)}...`}
      />
      <main>
        <H1>{event.title}</H1>
        <p>{event.description}</p>
      </main>
    </>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const { pastEvents } = await fetchMeetupEvents();

  return {
    paths: pastEvents.map((event) => ({ params: { eventSlug: slugEventTitle(event) } })),
    fallback: false,
  };
};

interface Params extends ParsedUrlQuery {
  eventSlug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { pastEvents } = await fetchMeetupEvents();
  const { eventSlug } = context.params as Params;
  console.log(parserEventIdFromSlug(eventSlug));

  return {
    props: {
      event: pastEvents.find((e) => e.id === parserEventIdFromSlug(eventSlug)),
    },
  };
};

export default EventPage;
