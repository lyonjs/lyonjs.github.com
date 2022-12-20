import React from 'react';
import dayjs from 'dayjs';
import _capitalize from 'lodash/capitalize';
import type { Event } from './types';
import { Twitter } from '../icons/Twitter';

export const PastEventCard: React.FC<{ event: Event }> = ({ event }) => {
  const dateParsed = dayjs(event.dateTime);
  const formattedDayAndMonth = _capitalize(dateParsed.format('D MMMM'));
  const formattedYear = dateParsed.format('YYYY');

  return (
    <article className="mb-12">
      <div className="flex mb-4 justify-between items-center flex-wrap gap-2">
        <p className="text-base text-right text-lyonjs-yellow bg-zinc-800 inline-block py-2 px-4 rounded-full border-2 border-gray-400 -mr-4">
          <span className="mr-3 uppercase" aria-hidden>
            📅
          </span>
          <span className="mr-3 uppercase">{formattedDayAndMonth}</span>
          <span className="text-base">{formattedYear}</span>
        </p>
        {event.sponsor ? (
          <p className="flex items-center">
            Sponsorisé par <span className="text-l ml-[1ch] font-semibold italic">{event.sponsor.name}</span>
          </p>
        ) : null}
      </div>
      <h3 className="text-xl mb-5 tracking-wide leading-normal">
        <a className="highlight" href={event.eventUrl} target="_blank" rel="noreferrer">
          {event.title}
        </a>
      </h3>

      {event.talks?.map((talk, index) => (
        <div key={index}>
          <h4 className="text-xl">📣 {talk.title}</h4>
          <p className="flex items-center">
            par
            {talk.speakers.map((speaker) =>
              speaker.socialLink ? (
                <a
                  className="ml-[1ch] inline-flex items-center hover:underline"
                  key={speaker.name}
                  href={speaker.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter color="currentColor" size={16} className="inline-block mr-[0.5ch]" />
                  {speaker.name}
                </a>
              ) : (
                <span className="ml-[1ch]" key={speaker.name}>
                  {speaker.name}
                </span>
              ),
            )}
          </p>
          {talk.videoLink && (
            <iframe
              className="aspect-video max-w-xl mx-auto my-4"
              width="100%"
              src={talk.videoLink}
              title={event.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      ))}
    </article>
  );
};
