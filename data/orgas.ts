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
    avatarUrl: '/orgas/paul.jpeg',
    description: 'CTO @365Talents / JS lover @LyonJS / NLP, Semantics & ML enthusiast',
    social: {
      twitter: 'paul_mougel',
      linkedin: 'paulmougel',
    },
  },
  {
    name: 'Mathieu Mure',
    avatarUrl: '/orgas/mathieu.jpeg',
    description:
      'CTO @zenika also Front-end dev | Co organizer of @lyonjs | Speakers in many conf | I do stuff on Twitch 👉 http://twitch.tv/Infrazull',
    social: {
      twitter: 'mathieumure',
      linkedin: 'mathieu-mure',
    },
  },
  {
    name: 'Antoine Caron',
    avatarUrl: '/orgas/antoine.jpg',
    description:
      'Web Maker @Bedrock_Tec , internet trublion and despote teacher @PolytechLyon #LyonJS #React #Node co-organiser of @LyonJ meetup',
    social: {
      twitter: 'slashgear_',
      linkedin: 'antoine-⚙%EF%B8%8F-c-7089788a/',
    },
  },
  {
    name: 'Mickael Alves',
    avatarUrl: '/orgas/mickael.jpeg',
    description: 'Consultant chez Zenika 🔴 Développeur chez Bedrock Streaming ⚫️ Co-Organisateur du LyonJS 🦁',
    social: {
      twitter: 'cruuzazul',
      linkedin: 'mickaelalves',
    },
  },
  {
    name: 'Mohamed Djebali',
    avatarUrl: '/orgas/mohamed.jpeg',
    description: 'Software Developer at Worldline | Co Organizer | Quiz Lover',
    social: {
      twitter: 'MohamedDjebali',
      linkedin: 'mohamed-djebali-developpeur-web',
    },
  },
];
