import { MetadataRoute } from 'next';
import { fetchYearsWithMeetups } from '../modules/meetup/queries/years-with-meetups';
import { fetchPastEvents } from '../modules/meetup/queries/past-events.api';
import { slugEventTitle } from '../modules/event/eventSlug';
import { overrideEvent } from '../modules/event/overrideEvent';

const BASE_URL = 'https://www.lyonjs.org';

function youtubeVideoId(embedUrl: string): string | null {
  const match = embedUrl.match(/\/embed\/([^/?]+)/);
  return match?.[1] ?? null;
}

function escapeXml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

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
    ...pastEvents.map((rawEvent) => {
      const event = overrideEvent(rawEvent);
      const eventYear = new Date(event.dateTime).getFullYear().toString();

      const images: string[] = [];
      if (event.featuredEventPhoto?.highResUrl) {
        images.push(event.featuredEventPhoto.highResUrl);
      }

      const videos: MetadataRoute.Sitemap[number]['videos'] = [];
      if (event.talks) {
        for (const talk of event.talks) {
          if (!talk.videoLink) continue;
          const videoId = youtubeVideoId(talk.videoLink);
          if (!videoId) continue;
          videos.push({
            title: escapeXml(talk.title),
            thumbnail_loc: `https://img.youtube.com/vi/${videoId}/0.jpg`,
            description: escapeXml(
              `${talk.title} - ${talk.speakers?.map((s) => s.name).join(', ') ?? ''} @ ${event.title}`,
            ),
          });
        }
      }

      const entry: MetadataRoute.Sitemap[number] = {
        url: `${BASE_URL}/evenement/${slugEventTitle(event)}`,
        lastModified: new Date(event.dateTime),
        changeFrequency: 'yearly' as const,
        priority: eventYear === currentYear ? 0.6 : 0.3,
      };

      if (images.length > 0) entry.images = images;
      if (videos.length > 0) entry.videos = videos;

      return entry;
    }),
  ];
}
