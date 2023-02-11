import Head from 'next/head';

export const LyonJSHead = () => (
  <Head>
    <title>LyonJS - Communauté lyonnaise des utilisateurs de JavaScript</title>
    <meta name="description" content="Communauté lyonnaise des utilisateurs de JavaScript" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
      <script type="application/ld+json">
          {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "http://lyonjs.org",
              "logo": "http://lyonjs.org/android-chrome-512x512.png"
          })
          }
      </script>
  </Head>
);
