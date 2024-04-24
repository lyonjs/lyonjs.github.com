import type { Event } from '../modules/event/types';
import { bedrock, indy, malt, smile, wanadev, zenika } from './sponsors';

export const dataOverride: { [key: string]: Partial<Event> } = {
  'https://www.meetup.com/lyonjs/events/299916483': {
    sponsor: wanadev,
    talks: [
      {
        title: 'Créer son service de streaming vidéo en direct (ou comment faire son Twitch du pauvre)',
        speakers: [
          {
            name: 'Damien Fernandes',
            socialLink: 'https://github.com/damienfern',
          },
        ],
        videoLink: 'https://www.youtube.com/embed/0JT3XwggfOc',
      },
      {
        title: 'Gérer la concurrence entre clients avec messenger et rabbitMQ',
        speakers: [
          {
            name: 'Ismaile Abdallah',
            socialLink: 'https://www.linkedin.com/in/ismaile-abdallah/',
          },
        ],
        videoLink: 'https://www.youtube.com/embed/B8AEED0SPMs',
      },
    ],
  },
  'https://www.meetup.com/lyonjs/events/299527784': {
    sponsor: zenika,
    talks: [
      {
        title: "Du code à l'image : Aller et retour",
        speakers: [
          {
            name: 'Etienne Doyon',
            socialLink: 'https://www.linkedin.com/in/doyon-etienne/',
          },
        ],
        videoLink: 'https://www.youtube.com/embed/YErYM5eu6Uo',
      },
      {
        title: 'Le futur du web est sur la périphérie du réseau',
        speakers: [
          {
            name: 'Julien Sulpis',
            socialLink: 'https://twitter.com/jsulpis',
          },
        ],
        videoLink: 'https://www.youtube.com/embed/2vonCshgv00',
      },
    ],
  },
  'https://www.meetup.com/lyonjs/events/298932058': {
    sponsor: indy,
    talks: [
      {
        title: "L'application mobile chez Indy : rétrospective un an après",
        speakers: [
          {
            name: 'Julien Tassin',
            socialLink: 'https://www.linkedin.com/in/julien-tassin-46094a162/',
          },
        ],
        videoLink: 'https://www.youtube.com/embed/d46ZfaHo0G0',
      },
      {
        title: 'Appwrite est-il prêt à éteindre Firebase ?',
        speakers: [
          {
            name: 'Lucas Audart',
            socialLink: 'https://www.linkedin.com/in/lucas-audart/',
          },
          {
            name: 'Mickaël Alves',
            socialLink: 'https://twitter.com/cruuzazul',
          },
        ],
        videoLink: 'https://www.youtube.com/embed/RfIUq1NmKxU',
      },
    ],
  },
  'https://www.meetup.com/lyonjs/events/298162224': {
    sponsor: zenika,
    talks: [
      {
        title: "Comment j'ai trouvé le sens de la vie grâce à WebAssembly",
        speakers: [
          {
            name: 'Théo Gianella',
            socialLink: 'https://www.linkedin.com/in/th%C3%A9o-gianella-bb2279251/',
          },
        ],
        videoLink: 'https://www.youtube.com/embed/sRTVop_TUws',
      },
      {
        title: 'Sécurisons nos utilisateurs grâce au Mozilla Observatory !',
        speakers: [
          {
            name: 'Antoine Caron',
            socialLink: 'https://twitter.com/Slashgear_',
          },
        ],
        videoLink: 'https://www.youtube.com/embed/nKxibe7HuwA',
      },
    ],
  },
  'https://www.meetup.com/lyonjs/events/297675405': {
    sponsor: indy,
    talks: [
      {
        title: 'Du Chêne au Sequoia',
        speakers: [
          {
            name: 'Romain Koenig',
            socialLink: 'https://www.linkedin.com/in/romain-koenig-502b854a/',
          },
        ],
        videoLink: 'https://www.youtube.com/embed/82sKzmGqwR0',
      },
      {
        title: "Revue de code : on n'est pas venu-e-s pour souffrir !",
        speakers: [
          {
            name: 'Anne-Laure de Boissieu',
            socialLink: 'https://twitter.com/AnneLaure2B',
          },
          {
            name: 'Pauline Rambaud',
            socialLink: 'https://twitter.com/pauinegu',
          },
        ],
        videoLink: 'https://www.youtube.com/embed/ZdaREyJZGjg',
      },
    ],
  },
  'https://www.meetup.com/lyonjs/events/296967782': {
    talks: [
      {
        title: "Tout ce que vous n'avez jamais voulu savoir sur les fuseaux horaires",
        speakers: [
          {
            name: 'Julien Deniau',
          },
        ],
        videoLink: 'https://www.youtube.com/embed/Y3dTgndzM5I',
      },
      {
        title: 'Comment les reconverties peuvent enrichir et inspirer vos équipes ?',
        speakers: [
          {
            name: 'Léa Coston',
          },
        ],
        videoLink: 'https://www.youtube.com/embed/OfssR1HBebM',
      },
    ],
    sponsor: zenika,
  },
  'https://www.meetup.com/lyonjs/events/296202933': {
    sponsor: indy,
    talks: [
      {
        title: 'Le Starter dont je suis le héros',
        speakers: [
          {
            name: 'Ivan Dalmet',
            socialLink: 'https://twitter.com/ivandalmet',
          },
          {
            name: 'Yoann Fleury',
            socialLink: 'https://twitter.com/yoannfleurydev',
          },
        ],
        videoLink: 'https://www.youtube.com/embed/kJAH7dtytxM',
      },
      {
        title: 'De Darwin au JS : Introduction aux algorithmes génétiques',
        speakers: [
          {
            name: 'Corentin Thomasset',
            socialLink: 'https://www.linkedin.com/in/corentin-thomasset/',
          },
        ],
        videoLink: 'https://www.youtube.com/embed/X7jebXh73mk',
      },
    ],
  },
  'https://www.meetup.com/lyonjs/events/295583450': {
    talks: [
      {
        title: 'Nuxt 3 - Réussir sa migration',
        speakers: [{ name: 'Jonathan BARTHELEMY', socialLink: 'https://twitter.com/jonathanbarthlm' }],
        videoLink: 'https://www.youtube.com/embed/bi6ALDIrmIw',
      },
      {
        title: "Du CSS aux shaders WebGL : panorama des techniques d'animation en 2023 !",
        speakers: [{ name: 'Julien Sulpis', socialLink: 'https://twitter.com/jsulpis' }],
        videoLink: 'https://www.youtube.com/embed/uRbvJur0RFU',
      },
    ],
    sponsor: zenika,
  },
  'https://www.meetup.com/lyonjs/events/293687276': {
    sponsor: zenika,
  },
  'https://www.meetup.com/lyonjs/events/261928293': {
    talks: [
      {
        title: 'Timeboxed TDD & TCR : Boostez votre Time to Market en dansant le Limbo',
        speakers: [
          {
            name: 'Younes Jaaidi',
          },
        ],
        videoLink: 'https://www.youtube.com/embed/p_0T0SCMuOQ',
      },
    ],
  },
  'https://www.meetup.com/lyonjs/events/274713264': {
    sponsor: zenika,
    talks: [
      {
        title: 'Back to the Vue (tour) 3',
        speakers: [
          {
            name: 'Mathieu Mure',
          },
          {
            name: 'Moustapha Agack',
          },
        ],
        videoLink: 'https://www.youtube.com/embed/uKlPuuWzzOk',
      },
    ],
  },
  'https://www.meetup.com/lyonjs/events/266113861': {
    sponsor: malt,
    talks: [
      {
        title: 'Optimistic UI, principes et implémentations',
        speakers: [
          {
            name: 'Clément Jacquelin',
          },
          {
            name: 'Maxence Dalmais',
          },
        ],
        videoLink: 'https://www.youtube.com/embed/OAslPGcaq1s',
      },
    ],
  },
  'https://www.meetup.com/lyonjs/events/292744601': {
    sponsor: malt,
    talks: [
      {
        title: 'Getting started with Nuxt 3 modules',
        speakers: [{ name: 'Nicolas Payot', socialLink: 'https://twitter.com/npayot' }],
        videoLink: 'https://www.youtube.com/embed/NtJHCe22XD8',
      },
      {
        title: 'Comment gagner 1000€ en 35 minutes avec du CSS ',
        speakers: [{ name: 'Geoffroy Begouassel', socialLink: 'https://twitter.com/npayot' }],
        videoLink: 'https://www.youtube.com/embed/4sDZ8nArSqM',
      },
    ],
  },
  'https://www.meetup.com/lyonjs/events/291958869': {
    talks: [
      {
        title: 'Playwright 🎭, the Cypress killer by Microsoft',
        speakers: [{ name: 'Mathieu Mure', socialLink: 'https://twitter.com/mathieumure' }],
        videoLink: 'https://www.youtube.com/embed/UDyBHzoMpV4',
      },
    ],
  },
  'https://www.meetup.com/lyonjs/events/291728436': {
    sponsor: indy,
    talks: [
      {
        title: "Comment on n'a (toujours) pas codé de back-end après 9 mois en production ?",
        speakers: [{ name: 'Marc Gavanier', socialLink: 'https://twitter.com/MGavanier' }],
        videoLink: 'https://www.youtube.com/embed/k2DWPBqmlH4',
      },
      {
        title: 'Mob Programming : ensemble on va plus loin',
        speakers: [{ name: 'Nicolas Poirier', socialLink: 'https://twitter.com/NicolasPoir' }],
        videoLink: 'https://www.youtube.com/embed/GCNbh0Le5k4',
      },
    ],
  },
  'https://www.meetup.com/lyonjs/events/290762638': {
    sponsor: zenika,
    talks: [
      {
        title: 'Projet XState',
        videoLink: 'https://www.youtube.com/embed/HWRQp2Y1rbw',
        speakers: [{ name: 'Maxime Blanc', socialLink: 'https://twitter.com/jeansmaug' }],
      },
      {
        title: 'gRPC-web - Connecter son front en grpc',
        videoLink: 'https://www.youtube.com/embed/U7em023u7SU',
        speakers: [{ name: 'Mohammad-Amine Banaei', socialLink: 'https://www.linkedin.com/in/mbnei/' }],
      },
    ],
  },
  'https://www.meetup.com/lyonjs/events/289494397': {
    sponsor: indy,
    talks: [
      {
        title: 'Introduction aux coroutines en Javascript',
        speakers: [{ name: 'Laurent Renard' }],
      },
      {
        title: 'Découverte du Web3 avec Javascript',
        speakers: [{ name: 'Samuel Ronce', socialLink: 'https://twitter.com/SamuelRonce' }],
      },
    ],
  },
  'https://www.meetup.com/lyonjs/events/289164485': {
    sponsor: smile,
    talks: [
      {
        title: "Tour d'horizon des nouveautés de Vue3 et son écosystème",
        speakers: [{ name: 'Quentin Le Caignec' }],
      },
    ],
  },
  'https://www.meetup.com/lyonjs/events/288153025': {
    sponsor: indy,
    talks: [
      {
        title: 'Passer d’un jeu en Flash à une borne d’arcade en JS',
        speakers: [
          { name: 'Hugo Contreras', socialLink: 'https://twitter.com/_hy0ug0_' },
          { name: 'Sylvain Blanc', socialLink: 'https://twitter.com/LaSylvBlc' },
        ],
      },
    ],
  },
  'https://www.meetup.com/lyonjs/events/285497869': {
    sponsor: bedrock,
    talks: [
      {
        title: 'Migration progressive vers Redux Toolkit',
        speakers: [{ name: 'Maxime Blanc', socialLink: 'https://twitter.com/jeansmaug' }],
        videoLink: 'https://www.youtube.com/embed/YsHiH7qCjKM',
      },
      {
        title: 'Comment ne pas jeter son application Frontend tous les deux ans ?',
        speakers: [{ name: 'Antoine Caron', socialLink: 'https://twitter.com/slashgear_' }, { name: 'Florent Dubost' }],
        videoLink: 'https://youtube.com/embed/t36UqNSmybM',
      },
    ],
  },
  'https://www.meetup.com/lyonjs/events/284851207': {
    sponsor: indy,
    talks: [
      {
        title: 'Trucs et astuces pour rendre mongoose moins pénibles au quotidien',
        speakers: [{ name: 'Julien' }],
      },
      {
        title: 'Quatre ans de développement d’un framework Node.JS',
        speakers: [{ name: 'Loic Poullain' }],
      },
    ],
  },
  'https://www.meetup.com/lyonjs/events/284549533': {
    sponsor: zenika,
    talks: [
      {
        title: 'Comment faire un trailer vidéo qui déchire avec des technos web ?',
        videoLink: 'https://www.youtube.com/embed/8nnDOT8b5Oc',
        speakers: [
          { name: 'Mickaël Alves', socialLink: 'https://twitter.com/cruuzazul' },
          { name: 'Antoine Caron', socialLink: 'https://twitter.com/slashgear_' },
        ],
      },
      {
        title: 'Pimp my site: Comment dynamiser un site pour attirer les milléniaux.',
        videoLink: 'https://www.youtube.com/embed/IUnMcbLxEnk',
        speakers: [
          { name: 'Julien Sulpis', socialLink: 'https://twitter.com/jsulpis' },
          { name: 'Mathieu Mure', socialLink: 'https://twitter.com/mathieumure' },
        ],
      },
    ],
  },
};
