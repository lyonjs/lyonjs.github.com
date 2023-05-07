import React from 'react';
import dayjs from 'dayjs';
import { ORGANISATION_MARKUP } from '../../header/LyonJSHead';
import { JsonLD } from '../../seo/JsonLD';
import type { Event } from '../types';

type Props = { event: Event };
export const EventMarkup: React.FC<Props> = ({ event }) => (
  <JsonLD
    jsonObject={{
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: event.title,
      startDate: event.dateTime,
      endDate: dayjs(event.dateTime).add(3, 'hours'),
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      location: {
        '@type': 'Place',
        name: event.venue.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: event.venue.address,
          addressLocality: event.venue.city,
          postalCode: event.venue.postalCode,
          addressCountry: 'FR',
        },
      },
      offers: {
        '@type': 'Offer',
        url: event.eventUrl,
        availability: 'https://schema.org/InStock',
      },
      image: event.imageUrl,
      description: event.description,
      organizer: ORGANISATION_MARKUP,
    }}
  />
);
