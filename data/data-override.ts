import type { Event } from '../modules/event/types';
import { bedrock, indy, smile, zenika } from './sponsors';

export const dataOverride: { [key: string]: Partial<Event> } = {
  'https://www.meetup.com/lyonjs/events/290762638': {
    sponsor: zenika,
    talks: [
      {
        title: 'Projet XState',
        speakers: [{ name: 'Maxime Blanc', socialLink: 'https://twitter.com/jeansmaug' }],
      },
      {
        title: 'gRPC-web - Connecter son front en grpc',
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
