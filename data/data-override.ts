import type { Event } from '../modules/event/types';
import { bedrock, indy, malt, smile, zenika } from './sponsors';

export const dataOverride: { [key: string]: Partial<Event> } = {
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
