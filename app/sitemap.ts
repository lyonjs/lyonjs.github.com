import { MetadataRoute } from 'next';
import { fetchYearsWithMeetups } from '../modules/meetup/queries/years-with-meetups';
import { fetchPastEvents } from '../modules/meetup/queries/past-events.api';
import { slugEventTitle } from '../modules/event/eventSlug';

const BASE_URL = 'https://www.lyonjs.org';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const years = await fetchYearsWithMeetups();
  const pastEvents = await fetchPastEvents();
  const currentYear = new Date().getFullYear().toString();

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/devenir-sponsor`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/code-de-conduite`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/a-propos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...Array.from(years)
      .toReversed()
      .map((year) => {
        const changeFrequency: 'weekly' | 'yearly' = year === currentYear ? 'weekly' : 'yearly';
        return {
          url: `${BASE_URL}/evenements-precedents/${year}`,
          lastModified: new Date(),
          changeFrequency,
          priority: year === currentYear ? 0.8 : 0.4,
        };
      }),
    ...pastEvents.map((event) => {
      const eventYear = new Date(event.dateTime).getFullYear().toString();
      return {
        url: `${BASE_URL}/evenement/${slugEventTitle(event)}`,
        lastModified: new Date(event.dateTime),
        changeFrequency: 'yearly' as const,
        priority: eventYear === currentYear ? 0.6 : 0.3,
      };
    }),
  ];
}
