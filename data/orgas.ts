export type Orga = {
  name: string;
  description: string;
  avatarUrl: string;
  social: {
    twitter?: string;
    linkedin?: string;
  };
};

export const orgas: Array<Orga> = [
  {
    name: 'Paul Mougel',
    avatarUrl: 'https://pbs.twimg.com/profile_images/965686217525383174/7qb8It5C_400x400.jpg',
    description: 'CTO @365Talents / JS lover @LyonJS / NLP, Semantics & ML enthusiast',
    social: {
      twitter: 'paul_mougel',
      linkedin: 'paulmougel',
    },
  },
  {
    name: 'Mathieu Mure',
    avatarUrl: 'https://pbs.twimg.com/profile_images/1055793411641491456/duhtH2dl_400x400.jpg',
    description:
      'CTO @zenika also Front-end dev | Co organizer of @lyonjs | Speakers in many conf | I do stuff on Twitch 👉 http://twitch.tv/Infrazull',
    social: {
      twitter: 'mathieumure',
      linkedin: 'mathieu-mure',
    },
  },
  {
    name: 'Antoine Caron',
    avatarUrl: 'https://pbs.twimg.com/profile_images/1530252527769374721/C9SKUOQ9_400x400.jpg',
    description:
      'Web Maker @Bedrock_Tec , internet trublion and despote teacher @PolytechLyon #LyonJS #React #Node co-organiser of @LyonJ meetup',
    social: {
      twitter: 'slashgear_',
      linkedin: 'antoine-%E2%9A%99%EF%B8%8F-caron-7089788a',
    },
  },
  {
    name: 'Mickael Alves',
    avatarUrl: 'https://pbs.twimg.com/profile_images/1452247219709566977/5Xzmgun-_400x400.jpg',
    description: 'Consultant chez Zenika 🔴 Développeur chez Bedrock Streaming ⚫️ Co-Organisateur du LyonJS 🦁',
    social: {
      twitter: 'cruuzazul',
      linkedin: 'mickaelalves',
    },
  },
];
