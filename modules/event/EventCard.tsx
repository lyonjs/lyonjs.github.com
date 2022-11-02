import React from 'react';
import dayjs from 'dayjs';
import _capitalize from 'lodash/capitalize';
import type { Event } from './types';
import { LinkPrimary } from '../button/ButtonPrimary';
import { Pin } from '../icons/Pin';

export const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  const dateParsed = dayjs(event.dateTime);
  const formattedDayAndMonth = _capitalize(dateParsed.format('D MMMM'));
  const formattedYear = dateParsed.format('YYYY');
  const paragraphs = event.description.split('\n');

  return (
    <article>
      <div className="flex justify-end">
        <p className="mb-4 text-2xl text-right text-lyonjs-yellow bg-zinc-800 inline-block py-3 px-6 rounded-full border-2 border-gray-400 -mr-4">
          <span className="mr-3 uppercase" aria-hidden>
            📅
          </span>
          <span className="mr-3 uppercase">{formattedDayAndMonth}</span>
          <span className="text-base">{formattedYear}</span>
        </p>
      </div>
      <h3 className="text-4xl mb-5 tracking-wide leading-normal">
        <span className="highlight">{event.title}</span>
      </h3>
      <div className="flex flex-col">
        <img src={event.imageUrl} alt={event.title} className="object-cover" />
        <a
          className="flex bg-zinc-800 my-4 p-4 gap-3 items-center text-lyonjs-yellow"
          href={`http://maps.google.com/maps?q=loc:${event.venue.lat}+${event.venue.lng}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Pin color="currentColor" size={18} />
          <div>
            <p>{event.venue.address}</p>
            <p>
              {event.venue.postalCode} {event.venue.city}
            </p>
          </div>
        </a>
      </div>

      <div className="font-sans">
        {paragraphs.map((it, id) => (
          <p className="my-4" key={id}>
            {it}
          </p>
        ))}
      </div>

      <div className="flex justify-center">
        <LinkPrimary href={event.eventUrl} className="text-lg" target="_blank" rel="noreferrer noopener">
          Réservez votre place
        </LinkPrimary>
      </div>
    </article>
  );
};
