import { malt, zenika } from './sponsors';
import { kolecto, fulll, _365talents } from './lyonjs100-sponsors';
import { Job } from '../modules/jobs/jobs.types';

/** 3 jobs max per gold sponsors */
const goldSponsorJobs: Array<Job> = [
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
  {
    title: 'Développeur Backend',
    url: 'https://www.google.com',
    sponsor: malt,
    type: 'CDI',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fus',
  },
  {
    title: 'Développeur Backend',
    url: 'https://www.google.com',
    sponsor: kolecto,
    type: 'CDI',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fus',
  },
  {
    title: 'Développeur Backend',
    url: 'https://www.google.com',
    sponsor: kolecto,
    type: 'CDI',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fus',
  },
  {
    title: 'Développeur Backend',
    url: 'https://www.google.com',
    sponsor: fulll,
    type: 'CDI',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fus',
  },
];

/** 1 job max per silver sponsors */
const silverSponsorJobs: Array<Job> = [
  {
    title: 'Développeur Fullstack',
    url: 'https://www.zenika.com',
    sponsor: zenika,
    type: 'CDI',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet error fuga illum perspiciatis possimus quam, quibusdam recusandae. Culpa dolores est facere ipsum minima molestias neque placeat quam quis. Accusantium, architecto.',
  },
  {
    title: 'Développeur Fullstack',
    url: 'https://www.zenika.com',
    sponsor: _365talents,
    type: 'Stage',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet error fuga illum perspiciatis possimus quam, quibusdam recusandae. Culpa dolores est facere ipsum minima molestias neque placeat quam quis. Accusantium, architecto.',
  },
];

export const lyonJS100Jobs = [...goldSponsorJobs, ...silverSponsorJobs];
