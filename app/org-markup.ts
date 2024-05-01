import { orgas } from '../data/orgas';

const BASE_URL = 'https://www.lyonjs.org';

export const ORGANISATION_MARKUP = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  url: BASE_URL,
  name: 'LyonJS',
  alternateName: 'LyonJS Meetup',
  email: 'contact@lyonjs.org',
  description: 'La communauté lyonnaise autour de JavaScript et de son écosystème',
  logo: `${BASE_URL}/android-chrome-512x512.png`,
  sameAs: [
    'https://www.meetup.com/fr-FR/LyonJS/',
    'https://twitter.com/lyonjs',
    'https://discord.gg/FytXQwFsG8',
    'https://www.linkedin.com/company/lyonjs',
    'https://www.youtube.com/channel/UCGTVc5PnIgAUoA2D2_6nJLg',
    'https://www.reddit.com/r/LyonJS/',
  ],
  member: orgas.map(({ name, avatarUrl }) => ({
    '@type': 'Person',
    name,
    image: `${BASE_URL}${avatarUrl}`,
  })),
};
