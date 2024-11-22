import { Sponsor } from '../modules/event/types';
import { bedrock, cleverCloud, indy, malt, wanadev, zenika } from './sponsors';

export const gold: Array<Sponsor> = [malt];

export const silver: Array<Sponsor> = [
  { name: '365 Talent', url: 'https://www.365talents.com/fr/', logo: '/sponsors/365Talent.svg' },
  zenika,
  bedrock,
  indy,
  { name: 'Akawaka', url: 'https://www.akawaka.fr/', logo: '/sponsors/akawaka.svg' },
];

export const bronze = [cleverCloud, wanadev];
