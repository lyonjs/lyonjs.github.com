export type Orga = {
  name: string;
  avatarUrl: string;
  social: {
    twitter?: string;
    linkedin?: string;
  };
};

export const orgas: Array<Orga> = [
  {
    name: 'Paul Mougel',
    avatarUrl: '/orgas/paul.jpeg',
    social: {
      twitter: 'paul_mougel',
      linkedin: 'paulmougel',
    },
  },
  {
    name: 'Mathieu Mure',
    avatarUrl: '/orgas/mathieu.jpeg',
    social: {
      twitter: 'mathieumure',
      linkedin: 'mathieu-mure',
    },
  },
  {
    name: 'Antoine Caron',
    avatarUrl: '/orgas/antoine.jpg',
    social: {
      twitter: 'slashgear_',
      linkedin: 'antoine-⚙%EF%B8%8F-c-7089788a/',
    },
  },
  {
    name: 'Mickael Alves',
    avatarUrl: '/orgas/mickael.jpeg',
    social: {
      twitter: 'mickaelalvs',
      linkedin: 'mickaelalves',
    },
  },
  {
    name: 'Mohamed Djebali',
    avatarUrl: '/orgas/mohamed.jpeg',
    social: {
      twitter: 'MohamedDjebali',
      linkedin: 'mohamed-djebali-developpeur-web',
    },
  },
  {
    name: 'Johana Lavigne',
    avatarUrl: '/orgas/johana.jpg',
    social: {
      twitter: 'JohanaLavigne',
      linkedin: 'johana-lavigne',
    },
  },
];
