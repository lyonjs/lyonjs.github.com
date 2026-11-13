import { EventDetail } from '../../../modules/event/components/EventDetail';
import { EventMarkup } from '../../../modules/event/components/EventMarkup';
import React from 'react';
import { parserEventIdFromSlug, slugEventTitle } from '../../../modules/event/eventSlug';
import { overrideEvent } from '../../../modules/event/overrideEvent';
import { fetchEvent } from '../../../modules/meetup/queries/event.api';
import { fetchPastEvents } from '../../../modules/meetup/queries/past-events.api';
import { notFound, permanentRedirect } from 'next/navigation';
import { Metadata } from 'next';

// Upcoming events are rendered on demand: refresh them hourly (RSVP count, description…)
export const revalidate = 3600;

export async function generateStaticParams() {
  const events = await fetchPastEvents();
  return events.map((event) => ({ slug: slugEventTitle(event) }));
}

export default async function EventPage({ params }: PageProps<'/evenement/[slug]'>) {
  const { slug } = await params;
  const eventId = parserEventIdFromSlug(slug);
  if (!eventId) {
    notFound();
  }
  let event;
  try {
    event = overrideEvent(await fetchEvent(eventId));
  } catch {
    notFound();
  }

  const canonicalSlug = slugEventTitle(event);
  if (slug !== canonicalSlug) {
    permanentRedirect(`/evenement/${canonicalSlug}`);
  }

  return (
    <main>
      <EventDetail event={event} slug={slug} />
      <EventMarkup event={event} />
    </main>
  );
}

export async function generateMetadata({ params }: PageProps<'/evenement/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const eventId = parserEventIdFromSlug(slug);
  if (!eventId) {
    return {};
  }
  try {
    const event = overrideEvent(await fetchEvent(eventId));
    const title = `LyonJS | ${event.title}`;
    const description = `Évènement LyonJS: ${event.description.slice(0, 250)}...`;

    return {
      title,
      description,
      alternates: {
        canonical: `/evenement/${slugEventTitle(event)}`,
      },
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
