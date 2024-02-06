import { gql } from 'graphql-request';
import type { Event } from '../../event/types';
import type { Edges } from '../api';
import { client, LYONJS_MEETUP_ID } from '../api';

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
            id
            title
            description
            eventUrl
            dateTime
            imageUrl
            going
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

export const fetchNextEvent = async (): Promise<Event[]> => {
  const response = await client.request<NextEventsQueryResponse>(queryForNextEvents, { id: LYONJS_MEETUP_ID });
  return response?.group?.upcomingEvents?.edges?.map((it) => it.node) || null;
};
