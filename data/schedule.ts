import { Schedule } from '../modules/schedule/types';
import { bedrock, CBTW, indy, leWagon, shodo, theodo, wildCodeSchool } from './sponsors';

export const schedule: Schedule[] = [
  {
    date: '04/23/2024',
    sponsor: indy,
  },
  {
    date: '05/15/2024',
    sponsor: bedrock,
  },
  {
    date: '06/12/2024',
    sponsor: leWagon,
  },
  {
    date: '07/10/2024',
    sponsor: wildCodeSchool,
  },
  {
    date: '09/11/2024',
    sponsor: indy,
  },
  {
    date: '10/09/2024',
    sponsor: shodo,
  },
  {
    date: '11/13/2024',
    sponsor: theodo,
  },
  {
    date: '12/11/2024',
    sponsor: CBTW,
  },
];
