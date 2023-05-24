import { YearNavigation } from '../../../modules/event/components/YearNavigation';
import Link from 'next/link';
import { slugEventTitle } from '../../../modules/event/eventSlug';
import { EventTile } from '../../../modules/event/components/EventTile';
import React from 'react';
import { fetchPastEvents } from '../../../modules/meetup/queries/past-events.api';
import _uniq from 'lodash/uniq';
import { overrideEvent } from '../../../modules/event/overrideEvent';

export async function PastEvents({ year }: { year: string }) {
  const allPastEvents = await fetchPastEvents();
  const yearsFromEvents: string[] = allPastEvents
    .map((event) => new Date(event.dateTime).getFullYear())
    .map((year) => year.toString());
  const years = _uniq(yearsFromEvents);
  const pastEvents = allPastEvents
    .map(overrideEvent)
    .filter((event) => new Date(event.dateTime).getFullYear().toString() === year);

  return (
    <>
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
    </>
  );
}
