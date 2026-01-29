import React from 'react';
import { ORGANISATION_MARKUP } from '../../../app/org-markup';
import { addToDateTime, subtractFromDateTime } from '../dateUtils';
import { JsonLD } from '../../seo/JsonLD';
import type { Event } from '../types';

type Props = { event: Event };
export const EventMarkup: React.FC<Props> = ({ event }) => {
  const venue = Array.isArray(event.venues) ? event.venues[0] : event.venues;
  return (
    <JsonLD
      jsonObject={{
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: event.title,
        startDate: event.dateTime,
        endDate: addToDateTime(event.dateTime, { hours: 3 }),
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        location:
          event.venues && venue
            ? {
                '@type': 'Place',
                name: venue.name,
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: venue.address,
                  addressLocality: venue.city,
                  postalCode: venue.postalCode,
                  addressCountry: 'FR',
                },
              }
            : null,
        performer: {
          '@type': 'PerformingGroup',
          name: 'LyonJS Community',
        },
        offers: {
          '@type': 'Offer',
          url: event.eventUrl,
          price: 0,
          priceCurrency: 'EUR',
          validFrom: subtractFromDateTime(event.dateTime, { days: 30 }),
          availability: 'https://schema.org/InStock',
        },
        image: [
          event.featuredEventPhoto?.highResUrl ?? '/lyonjs.webp',
          ...(event.photoAlbum ? event.photoAlbum.photoSample.map((image) => image.source) : []),
        ],
        description: event.description,
        organizer: ORGANISATION_MARKUP,
      }}
    />
  );
};
