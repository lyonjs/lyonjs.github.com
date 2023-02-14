import Head from 'next/head';

const title = 'LyonJS - Communauté lyonnaise des utilisateurs de JavaScript';
const description =
  'Communauté lyonnaise des utilisateurs de JavaScript, vous retrouverez ici le replay de nos derniers meetups ainsi que les dates des prochains évènements, conférences, soirées, partage, connaissance, talk, speakers';
const url = 'http://lyonjs.org';
const image = `${url}/lyonjs.webp`;
export const LyonJSHead = () => (
  <Head>
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />

    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta name="og:title" content={title} />
    <meta name="og:description" content={description} />
    <meta name="og:image" content={image} />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={url} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={image} />

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
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          url: 'http://lyonjs.org',
          logo: 'http://lyonjs.org/android-chrome-512x512.png',
        }),
      }}
    />
  </Head>
);
