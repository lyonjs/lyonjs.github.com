import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fetchPastEvents } from '../../../../../modules/meetup/queries/past-events.api';
import { fetchEvent } from '../../../../../modules/meetup/queries/event.api';
import { overrideEvent } from '../../../../../modules/event/overrideEvent';
import { slugEventTitle, parserEventIdFromSlug } from '../../../../../modules/event/eventSlug';
import { slugTalkTitle, findTalkBySlug } from '../../../../../modules/event/talkSlug';
import { youtubeWatchUrl, youtubeThumbnailUrl } from '../../../../../modules/event/youtubeUtils';
import { JsonLD } from '../../../../../modules/seo/JsonLD';
import { ORGANISATION_MARKUP } from '../../../../org-markup';
import styles from './ReplayPage.module.css';

type Params = { slug: string; talkSlug: string };

export async function generateStaticParams() {
  const pastEvents = await fetchPastEvents();
  const params: Params[] = [];

  for (const rawEvent of pastEvents) {
    const event = overrideEvent(rawEvent);
    if (!event.talks) continue;
    const eventSlug = slugEventTitle(event);
    for (const talk of event.talks) {
      if (!talk.videoLink) continue;
      params.push({ slug: eventSlug, talkSlug: slugTalkTitle(talk) });
    }
  }

  return params;
}

async function getEventAndTalk(slug: string, talkSlug: string) {
  const eventId = parserEventIdFromSlug(slug);
  if (!eventId) return null;

  try {
    const event = overrideEvent(await fetchEvent(eventId));
    if (!event.talks) return null;
    const talk = findTalkBySlug(event.talks, talkSlug);
    if (!talk?.videoLink) return null;
    return { event, talk };
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: PageProps<'/evenement/[slug]/replay/[talkSlug]'>): Promise<Metadata> {
  const { slug, talkSlug } = await params;
  const result = await getEventAndTalk(slug, talkSlug);
  if (!result) return {};

  const { event, talk } = result;
  const speakers = talk.speakers?.map((s) => s.name).join(', ') ?? '';
  const title = `${talk.title} - ${speakers} | LyonJS`;
  const description = `Replay de "${talk.title}" par ${speakers}, présenté lors de ${event.title}`;
  const thumbnailUrl = youtubeThumbnailUrl(talk.videoLink!);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'video.other',
      videos: [{ url: talk.videoLink! }],
      images: thumbnailUrl ? [{ url: thumbnailUrl }] : undefined,
    },
    twitter: {
      card: 'player',
      title,
      description,
      players: [
        {
          playerUrl: talk.videoLink!,
          streamUrl: talk.videoLink!,
          width: 1280,
          height: 720,
        },
      ],
    },
  };
}

export default async function ReplayPage({ params }: PageProps<'/evenement/[slug]/replay/[talkSlug]'>) {
  const { slug, talkSlug } = await params;
  const result = await getEventAndTalk(slug, talkSlug);
  if (!result) notFound();

  const { event, talk } = result;
  const speakers = talk.speakers?.map((s) => s.name).join(', ') ?? '';
  const watchUrl = youtubeWatchUrl(talk.videoLink!);
  const thumbnailUrl = youtubeThumbnailUrl(talk.videoLink!);

  return (
    <main className={styles.page}>
      <div className={styles.videoWrapper}>
        <iframe
          src={talk.videoLink}
          title={talk.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className={styles.info}>
        <h1 className={styles.title}>{talk.title}</h1>

        {talk.speakers && talk.speakers.length > 0 && (
          <p className={styles.speakers}>
            {talk.speakers.map((speaker, i) => (
              <span key={speaker.name}>
                {i > 0 && ', '}
                {speaker.socialLink ? (
                  <a href={speaker.socialLink} target="_blank" rel="noopener noreferrer">
                    {speaker.name}
                  </a>
                ) : (
                  speaker.name
                )}
              </span>
            ))}
          </p>
        )}

        <Link href={`/evenement/${slug}`} className={styles.backLink}>
          &larr; Retour à {event.title}
        </Link>
      </div>

      <JsonLD
        jsonObject={{
          '@context': 'https://schema.org',
          '@type': 'VideoObject',
          name: talk.title,
          description: `Replay de "${talk.title}" par ${speakers}, présenté lors de ${event.title}`,
          thumbnailUrl: thumbnailUrl ? [thumbnailUrl] : [],
          embedUrl: talk.videoLink,
          contentUrl: watchUrl,
          uploadDate: event.dateTime,
          publisher: ORGANISATION_MARKUP,
        }}
      />
    </main>
  );
}
