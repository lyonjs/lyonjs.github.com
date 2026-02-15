import { MetadataRoute } from 'next';
import { fetchYearsWithMeetups } from '../modules/meetup/queries/years-with-meetups';
import { fetchPastEvents } from '../modules/meetup/queries/past-events.api';
import { slugEventTitle } from '../modules/event/eventSlug';
import { slugTalkTitle } from '../modules/event/talkSlug';
import { overrideEvent } from '../modules/event/overrideEvent';
import { youtubeVideoId } from '../modules/event/youtubeUtils';

const BASE_URL = 'https://www.lyonjs.org';

function escapeXml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const years = await fetchYearsWithMeetups();
  const pastEvents = await fetchPastEvents();
  const currentYear = new Date().getFullYear().toString();

  const replayEntries: MetadataRoute.Sitemap = [];

  const eventEntries: MetadataRoute.Sitemap = pastEvents.map((rawEvent) => {
    const event = overrideEvent(rawEvent);
    const eventSlug = slugEventTitle(event);
    const eventYear = new Date(event.dateTime).getFullYear().toString();

    const images: string[] = [];
    if (event.featuredEventPhoto?.highResUrl) {
      images.push(event.featuredEventPhoto.highResUrl);
    }

    if (event.talks) {
      for (const talk of event.talks) {
        if (!talk.videoLink) continue;
        const videoId = youtubeVideoId(talk.videoLink);
        if (!videoId) continue;

        const speakers = talk.speakers?.map((s) => s.name).join(', ') ?? '';

        replayEntries.push({
          url: `${BASE_URL}/evenement/${eventSlug}/replay/${slugTalkTitle(talk)}`,
          lastModified: new Date(event.dateTime),
          changeFrequency: 'yearly' as const,
          priority: 0.5,
          videos: [
            {
              title: escapeXml(talk.title),
              thumbnail_loc: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
              description: escapeXml(`Replay de "${talk.title}" par ${speakers}, présenté lors de ${event.title}`),
            },
          ],
        });
      }
    }

    const entry: MetadataRoute.Sitemap[number] = {
      url: `${BASE_URL}/evenement/${eventSlug}`,
      lastModified: new Date(event.dateTime),
      changeFrequency: 'yearly' as const,
      priority: eventYear === currentYear ? 0.6 : 0.3,
    };

    if (images.length > 0) entry.images = images;

    return entry;
  });

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
    {
      url: `${BASE_URL}/presse`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
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
    ...eventEntries,
    ...replayEntries,
  ];
}
