import { Event } from './types';
import { dataOverride } from '../../data/data-override';
import _merge from 'lodash/merge';

export const overrideEvent = (event: Event): Event => {
  if (event && dataOverride[event.eventUrl]) {
    return _merge(event, dataOverride[event.eventUrl]);
  }
  return event;
};
