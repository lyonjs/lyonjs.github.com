import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { LyonJSHead } from '../../modules/header/LyonJSHead';
import { Event } from '../../modules/event/types';
import { EventDetail } from '../../modules/event/components/EventDetail';
import { EventMarkup } from '../../modules/event/components/EventMarkup';
import { parserEventIdFromSlug, slugEventTitle } from '../../modules/event/eventSlug';
import { fetchEvent } from '../../modules/meetup/queries/event.api';
import { fetchPastEvents } from '../../modules/meetup/queries/past-events.api';

const EventPage: NextPage<{ event: Event }> = ({ event }) => {
  return (
    <>
      <LyonJSHead
        title={`LyonJS | ${event.title}`}
        description={`Évènement LyonJS: ${event.shortDescription || event.description.slice(0, 250)}...`}
      />
      <main>
        <EventDetail event={event} />
        <EventMarkup event={event} />
      </main>
    </>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const pastEvents = await fetchPastEvents();

  return {
    paths: pastEvents.map((event) => ({ params: { eventSlug: slugEventTitle(event) } })),
    fallback: false,
  };
};

interface Params extends ParsedUrlQuery {
  eventSlug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { eventSlug } = context.params as Params;
  const eventId = parserEventIdFromSlug(eventSlug);
  let event;
  if (eventId) {
    event = await fetchEvent(eventId);
  }

  return {
    props: {
      event,
    },
  };
};

export default EventPage;
