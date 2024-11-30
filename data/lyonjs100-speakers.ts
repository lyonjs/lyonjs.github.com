type Speaker = {
  name: string;
  talk?: {
    title: string;
    description: string;
  };
  avatarUrl: string;
  social: {
    twitter?: string;
    linkedin?: string;
  };
};
export const speakers: Array<Speaker> = [
  { name: 'Matthieu Lux', avatarUrl: '/speakers/matthieu-lux.webp', social: { twitter: 'swiip', linkedin: 'swiip' } },
  { name: 'Jérémie Patonnier', avatarUrl: '/speakers/jeremie-patonnier.jpg', social: { twitter: 'jeremiepat' } },
  {
    name: 'Jonny Burger',
    avatarUrl: '/speakers/jonny-burger.png',
    social: { twitter: 'JNYBGR', linkedin: 'jonny-burger-4115109b' },
  },
  {
    name: `Bientôt d'autres`,
    avatarUrl: '/speakers/secret.png',
    social: {},
  },
  {
    name: `Pourquoi pas toi ?`,
    avatarUrl: '/speakers/secret.png',
    social: {},
  },
];
