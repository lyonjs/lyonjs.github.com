import { Event } from './types';
import { dataOverride } from '../../data/data-override';

export const overrideEvent = (event: Event): Event => {
  if (event && dataOverride[event.eventUrl]) {
    return { ...event, ...dataOverride[event.eventUrl] };
  }
  return event;
};
