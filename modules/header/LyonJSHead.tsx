// noinspection ES6UnusedImports

import Head from 'next/head';
import { useRouter } from 'next/router';
import { orgas } from '../../data/orgas';

const DEFAULT_TITLE = 'LyonJS - Communauté lyonnaise des utilisateurs de JavaScript';
const DEFAULT_DESCRIPTION =
  'Communauté lyonnaise des utilisateurs de JavaScript, vous retrouverez ici les replays de nos derniers meetups ainsi que les dates des prochains évènements, conférences, soirées, partage, connaissance, talk, speakers';
const BASE_URL = 'https://www.lyonjs.org';
const SOCIAL_IMAGE = `${BASE_URL}/lyonjs.webp`;

export const ORGANISATION_MARKUP = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  url: BASE_URL,
  name: 'LyonJS',
  logo: `${BASE_URL}/android-chrome-512x512.png`,
  member: orgas.map(({ name, avatarUrl }) => ({
    '@type': 'Person',
    name,
    image: `${BASE_URL}${avatarUrl}`,
  })),
};

export const LyonJSHead: React.FC<{ title?: string; description?: string; socialImage?: string }> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  socialImage = SOCIAL_IMAGE,
}) => {
  const { asPath } = useRouter();
  const completePath = `${BASE_URL}${asPath.split('?')[0]}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="canonical" content={completePath} />

      <meta property="og:url" content={completePath} />
      <meta property="og:type" content="website" />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={socialImage} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={completePath} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={socialImage} />

      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ORGANISATION_MARKUP),
        }}
      />
      <meta name="robots" content="index,follow" />
    </Head>
  );
};
