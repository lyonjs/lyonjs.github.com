import { malt, zenika } from './sponsors';
import { Job } from '../modules/jobs/jobs.types';

export const lyonjs100Jobs: Array<Job> = [
  {
    title: 'Développeur Fullstack',
    url: 'https://www.zenika.com',
    sponsor: zenika,
    type: 'CDI',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet error fuga illum perspiciatis possimus quam, quibusdam recusandae. Culpa dolores est facere ipsum minima molestias neque placeat quam quis. Accusantium, architecto.',
  },
  {
    title: 'Développeur Frontend',
    url: 'https://www.google.com',
    sponsor: malt,
    type: 'CDI',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec nisl',
  },
  {
    title: 'Développeur Backend',
    url: 'https://www.google.com',
    sponsor: malt,
    type: 'CDI',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fus',
  },
];
