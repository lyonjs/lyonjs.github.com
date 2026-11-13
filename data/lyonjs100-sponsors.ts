import { Sponsor } from '../modules/event/types';
import { bedrock, cleverCloud, fulll, indy, malt, theodo, wanadev, zenika } from './sponsors';

export const kolecto: Sponsor = {
  name: 'Kolecto',
  url: 'https://www.kolecto.fr/',
  logo: '/sponsors/kolecto.svg',
};

export const feelinjob = { name: 'Feelinjob', url: 'https://www.feelinjob.com/', logo: '/sponsors/feelinjob.svg' };

export const akawaka: Sponsor = { name: 'Akawaka', url: 'https://www.akawaka.fr/', logo: '/sponsors/akawaka.svg' };

export const talents365: Sponsor = {
  name: '365 Talent',
  url: 'https://www.365talents.com/fr/',
  logo: '/sponsors/365Talent.svg',
};

export const gold: Array<Sponsor> = [malt, fulll, kolecto, akawaka];

export const silver: Array<Sponsor> = [talents365, zenika, bedrock, indy, theodo];

export const bronze = [cleverCloud, wanadev, feelinjob];
