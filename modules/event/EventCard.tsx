import React from 'react';
import dayjs from 'dayjs';
import _capitalize from 'lodash/capitalize';
import type { Event } from './types';
import { ButtonLink } from '../atoms/button/Button';
import { Pin } from '../icons/Pin';
import ReactMarkdown from 'react-markdown';
import { H3 } from '../atoms/remark/Titles';
import { EventMarkup } from './EventMarkup';

export const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  const dateParsed = dayjs(event.dateTime);
  const formattedDayAndMonth = _capitalize(dateParsed.format('D MMMM'));
  const formattedYear = dateParsed.format('YYYY');

  return (
    <article>
      <div className="flex mb-4 -ml-4 justify-between items-center">
        <p className="text-xl text-right text-lyonjs-yellow bg-zinc-800 inline-block py-3 px-6 rounded-full border-2 border-gray-400">
          <span className="mr-3 uppercase" aria-hidden>
            📅
          </span>
          <span className="mr-3 uppercase">{formattedDayAndMonth}</span>
          <span className="text-base">{formattedYear}</span>
        </p>
        {event.sponsor ? (
          <p className="text-xl flex items-center">
            Sponsorisé par <span className="text-2xl ml-[0.5ch] font-semibold italic">{event.sponsor.name}</span>
          </p>
        ) : null}
      </div>
      <H3>{event.title}</H3>
      <div className="flex flex-col md:flex-row md:gap-4">
        <img src={event.imageUrl} alt={event.title} className="object-cover md:w-1/2 md:flex-1" />
        <a
          className="flex bg-zinc-800 my-4 p-4 gap-3 items-center text-lyonjs-yellow md:flex-1 md:my-0"
          href={`http://maps.google.com/maps?q=loc:${event.venue.lat}+${event.venue.lng}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Pin color="currentColor" size={18} />
          <div>
            {event.sponsor && <p>{event.sponsor.name}</p>}
            <p>{event.venue.address}</p>
            <p>
              {event.venue.postalCode} {event.venue.city}
            </p>
          </div>
        </a>
      </div>

      <div className="font-sans">
        <ReactMarkdown
          components={{
            p: ({ node, ...props }) => <p className="my-4" {...props} />,
          }}
        >
          {event.description}
        </ReactMarkdown>
      </div>

      <div className="flex justify-center">
        <ButtonLink href={event.eventUrl} target="_blank" rel="noreferrer noopener">
          Réservez votre place
        </ButtonLink>
      </div>

      <EventMarkup event={event} />
    </article>
  );
};
