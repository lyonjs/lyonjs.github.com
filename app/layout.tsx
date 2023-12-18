import { Metadata, Viewport } from 'next';
import React, { ReactNode } from 'react';
import { Header } from '../modules/header/Header';
import { Footer } from '../modules/footer/Footer';
import { Analytics } from '@vercel/analytics/react';

import 'normalize.css';
import '../styles/globals.css';
import 'dayjs/locale/fr';
import dayjs from 'dayjs';

import { ORGANISATION_MARKUP } from './org-markup';

dayjs.locale('fr');

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr-FR">
      <body>
        <div id="__next">
          <Header />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(ORGANISATION_MARKUP),
            }}
          />
          {children}
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}

const title = 'LyonJS - Communauté lyonnaise des utilisateurs de JavaScript';
const description =
  'Communauté lyonnaise des utilisateurs de JavaScript, vous retrouverez ici les replays de nos derniers meetups ainsi que les dates des prochains évènements, conférences, soirées, partage, connaissance, talk, speakers';

export const viewport: Viewport = {
  themeColor: '#000000',
};
export const metadata: Metadata = {
  metadataBase: new URL('https://lyonjs.org'),
  title,
  description,
  robots: 'index,follow',
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        sizes: '32x32',
        url: 'favicon-32x32.png',
      },
      {
        rel: 'icon',
        sizes: '16x16',
        url: 'favicon-16x16.png',
      },
    ],
  },
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'fr-FR',
    images: [{ url: `https://lyonjs.org/lyonjs.webp`, width: 600, height: 338 }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`https://lyonjs.org/lyonjs.webp`],
  },
};
