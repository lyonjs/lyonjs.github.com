import type { Event } from './types';
import { slugify } from '../seo/slugify';

const EVENT_DELIMITER = '-e_';
export const slugEventTitle = (event: Event) => `${slugify(event.title)}${EVENT_DELIMITER}${event.id}`;

const parsingRegexp = /-e_(?<eventID>\d+)(\/|\?)?/;

export const parserEventIdFromSlug = (slug: string) => {
  const match = slug.match(parsingRegexp);

  return match?.groups?.eventID;
};
