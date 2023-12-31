import { orgas } from '../data/orgas';

const BASE_URL = 'https://www.lyonjs.org';

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
