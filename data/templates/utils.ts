import { Temporal } from 'temporal-polyfill';
import { Schedule } from '../../modules/schedule/types';

function formatDate(iso: string): string {
  const [month, day, year] = iso.split('/');
  const plainDate = Temporal.PlainDate.from({ year: parseInt(year), month: parseInt(month), day: parseInt(day) });
  return plainDate.toLocaleString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
type Options = {
  pre?: string;
  post?: string;
};
export function addIfDefined(value?: string, options?: Options): string {
  if (!value) {
    return '';
  }
  return `${options?.pre || ''}${value}${options?.post || ''}`;
}

export function datesWithNoSponsor(dates: Array<Schedule>): string {
  return dates
    .filter((item) => !item.sponsor)
    .map((item) => `\t- ${formatDate(item.date)}`)
    .join('\n');
}

export function datesAfterToday(dates: Array<Schedule>): string {
  const today = Temporal.Now.plainDateISO();
  return dates
    .filter((item) => {
      const [month, day, year] = item.date.split('/');
      const itemDate = Temporal.PlainDate.from({ year: parseInt(year), month: parseInt(month), day: parseInt(day) });
      return Temporal.PlainDate.compare(itemDate, today) > 0;
    })
    .map((item) => `\t- ${formatDate(item.date)}`)
    .join('\n');
}
