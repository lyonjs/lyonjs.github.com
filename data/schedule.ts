import { Schedule } from '../modules/schedule/types';
import {
  adaTechSchool,
  axopen,
  bedrock,
  CBTW,
  esker,
  fulll,
  indy,
  ippon,
  leWagon,
  shodo,
  theodo,
  wildCodeSchool,
  zenika,
} from './sponsors';
import { Sponsor } from '../modules/event/types';

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
  {
    date: '03/12/2025',
    sponsor: axopen,
  },
  {
    date: '04/16/2025',
    sponsor: fulll,
  },
  {
    date: '05/14/2025',
    sponsor: zenika,
  },
  {
    date: '06/03/2025',
    sponsor: bedrock,
  },
  {
    date: '07/09/2025',
    sponsor: adaTechSchool,
  },
  {
    date: '09/17/2025',
    sponsor: shodo,
  },
  {
    date: '10/15/2025',
    sponsor: indy,
  },
  {
    date: '11/19/2025',
    sponsor: leWagon,
  },
  {
    date: '12/10/2025',
    sponsor: ippon,
  },
  {
    date: '01/13/2026',
    sponsor: zenika,
  },
  {
    date: '02/11/2026',
    sponsor: esker,
  },
  {
    date: '03/11/2026',
    sponsor: {
      name: 'LyonJS',
    } as Sponsor,
  },
  {
    date: '04/08/2026',
  },
  {
    date: '05/15/2026',
  },
  {
    date: '06/10/2026',
  },
];

export function getRecentSponsors(months = 12): Record<string, Sponsor> {
  const now = new Date();
  const cutoff = new Date(now.getFullYear(), now.getMonth() - months, now.getDate());

  const result: Record<string, Sponsor> = {};
  for (const entry of schedule) {
    if (!entry.sponsor?.logo) continue;
    const [month, day, year] = entry.date.split('/');
    const date = new Date(Number(year), Number(month) - 1, Number(day));
    if (date >= cutoff && date <= now) {
      result[entry.sponsor.name] = entry.sponsor;
    }
  }
  return result;
}
