import { Sponsor } from '../modules/event/types';
import { bedrock, cleverCloud, indy, malt, theodo, wanadev, zenika } from './sponsors';

export const fulll: Sponsor = {
  name: 'Fulll',
  url: 'https://www.fulll.fr/',
  logo: '/sponsors/fulll.webp',
};

export const kolecto: Sponsor = {
  name: 'Kolecto',
  url: 'https://www.kolecto.fr/',
  logo: '/sponsors/kolecto.svg',
};

export const feelinjob = { name: 'Feelinjob', url: 'https://www.feelinjob.com/', logo: '/sponsors/feelinjob.svg' };

export const akawaka: Sponsor = { name: 'Akawaka', url: 'https://www.akawaka.fr/', logo: '/sponsors/akawaka.svg' };

export const _365talents: Sponsor = {
  name: '365 Talent',
  url: 'https://www.365talents.com/fr/',
  logo: '/sponsors/365Talent.svg',
};

export const gold: Array<Sponsor> = [malt, fulll, kolecto, akawaka];

export const silver: Array<Sponsor> = [_365talents, zenika, bedrock, indy, theodo];

export const bronze = [cleverCloud, wanadev, feelinjob];
