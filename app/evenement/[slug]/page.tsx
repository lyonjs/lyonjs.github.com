import { EventDetail } from '../../../modules/event/components/EventDetail';
import { EventMarkup } from '../../../modules/event/components/EventMarkup';
import React from 'react';
import { parserEventIdFromSlug } from '../../../modules/event/eventSlug';
import { overrideEvent } from '../../../modules/event/overrideEvent';
import { fetchEvent } from '../../../modules/meetup/queries/event.api';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const revalidate = 3600;

export default async function EventPage({ params: { slug } }: { params: { slug: string } }) {
  const eventId = parserEventIdFromSlug(slug);
  if (!eventId) {
    notFound();
  }
  try {
    const event = overrideEvent(await fetchEvent(eventId));

    return (
      <main>
        <EventDetail event={event} />
        <EventMarkup event={event} />
      </main>
    );
  } catch {
    notFound();
  }
}

export async function generateMetadata({ params: { slug } }: { params: { slug: string } }): Promise<Metadata> {
  const eventId = parserEventIdFromSlug(slug);
  if (!eventId) {
    return {};
  }
  try {
    const event = overrideEvent(await fetchEvent(eventId));
    const title = `LyonJS | ${event.title}`;
    const description = `Évènement LyonJS: ${event.shortDescription || event.description.slice(0, 250)}...`;

    return {
      title,
      description,
      twitter: {
        title,
        description,
      },
      openGraph: {
        title,
        description,
      },
    };
  } catch {
    return {};
  }
}
