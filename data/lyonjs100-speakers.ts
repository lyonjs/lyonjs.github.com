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
  { name: 'Léa Coston', avatarUrl: '/speakers/lea-coston.jpeg', social: { linkedin: 'l%C3%A9a-coston-92321099' } },
  { name: 'Jérémie Patonnier', avatarUrl: '/speakers/jeremie-patonnier.jpg', social: { twitter: 'jeremiepat' } },
  {
    name: 'Jonny Burger',
    avatarUrl: '/speakers/jonny-burger.png',
    social: { twitter: 'JNYBGR', linkedin: 'jonny-burger-4115109b' },
  },
];
