import { MetadataRoute } from 'next';
import { fetchYearsWithMeetups } from '../modules/meetup/queries/years-with-meetups';
import { fetchPastEvents } from '../modules/meetup/queries/past-events.api';
import { slugEventTitle } from '../modules/event/eventSlug';

const BASE_URL = 'https://lyonjs.org';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const years = await fetchYearsWithMeetups();
  const pastEvents = await fetchPastEvents();
  const lastModified = new Date();

  return [
    {
      url: BASE_URL,
      lastModified,
    },
    {
      url: `${BASE_URL}/code-de-conduite`,
      lastModified,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified,
    },
    ...Array.from(years)
      .reverse()
      .map((year) => ({
        url: `${BASE_URL}/evenements-precedents/${year}`,
        lastModified,
      })),
    ...pastEvents.map((event) => ({
      url: `${BASE_URL}/evenement/${slugEventTitle(event)}`,
      lastModified,
    })),
  ];
}
