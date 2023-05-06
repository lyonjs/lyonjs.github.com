import { gql } from 'graphql-request';
import type { Event } from '../../event/types';
import type { Edges } from '../api';
import { client } from '../api';

type NextEventsQueryResponse = {
  group: {
    upcomingEvents: Edges<Event>;
  };
};

const queryForNextEvents = gql`
  query meetupEvents($id: ID!) {
    group(id: $id) {
      upcomingEvents(input: {}) {
        edges {
          node {
            title
            description
            eventUrl
            dateTime
            imageUrl
            venue {
              name
              address
              city
              postalCode
              lat
              lng
            }
          }
        }
      }
    }
  }
`;

export const fetchNextEvent = async (): Promise<Event> => {
  const response = await client.request<NextEventsQueryResponse>(queryForNextEvents, { id: 18305583 });
  const nextEvents = response?.group?.upcomingEvents?.edges?.[0]?.node || null;
  return nextEvents;
};
