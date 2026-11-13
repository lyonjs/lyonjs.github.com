import { fetchPastEvents } from './past-events.api';

export const fetchYearsWithMeetups = async (): Promise<Set<string>> => {
  const pastEvents = await fetchPastEvents();

  return new Set(pastEvents.map((event) => new Date(event.dateTime).getFullYear().toString()));
};
