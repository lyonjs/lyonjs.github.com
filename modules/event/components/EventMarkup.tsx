import React from 'react';
import dayjs from 'dayjs';
import { ORGANISATION_MARKUP } from '../../../app/org-markup';
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
      performer: {
        '@type': 'PerformingGroup',
        name: 'LyonJS Community',
      },
      offers: {
        '@type': 'Offer',
        url: event.eventUrl,
        price: 0,
        priceCurrency: 'EUR',
        validFrom: dayjs(event.dateTime).subtract(30, 'days'),
        availability: 'https://schema.org/InStock',
      },
      image: [event.imageUrl, ...(event.photoAlbum ? event.photoAlbum.photoSample.map((image) => image.source) : [])],
      description: event.description,
      organizer: ORGANISATION_MARKUP,
    }}
  />
);
