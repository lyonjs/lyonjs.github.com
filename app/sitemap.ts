import { MetadataRoute } from 'next';
import { fetchYearsWithMeetups } from '../modules/meetup/queries/years-with-meetups';
import { fetchPastEvents } from '../modules/meetup/queries/past-events.api';
import { slugEventTitle } from '../modules/event/eventSlug';

const BASE_URL = 'https://www.lyonjs.org';

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
      url: `${BASE_URL}/devenir-sponsor`,
      lastModified,
    },
    {
      url: `${BASE_URL}/code-de-conduite`,
      lastModified,
    },
    {
      url: `${BASE_URL}/a-propos`,
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
