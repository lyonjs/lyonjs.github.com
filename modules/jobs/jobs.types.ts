import { Sponsor } from '../event/types';

export type Job = {
  title: string;
  sponsor: Sponsor;
  type: string;
  description: string;
  url: string;
};
