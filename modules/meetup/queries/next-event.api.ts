import { gql } from 'graphql-request';
import type { Event } from '../../event/types';
import type { Edges } from '../api';
import { client, LYONJS_MEETUP_ID } from '../api';

type NextEventsQueryResponse = {
  group: {
    events: Edges<Event>;
  };
};

const queryForNextEvents = gql`
  query meetupEvents($id: ID!) {
    group(id: $id) {
      events {
        edges {
          node {
            id
            title
            description
            eventUrl
            dateTime
            featuredEventPhoto {
              highResUrl
            }
            venues {
              name
              address
              postalCode
              city
              country
            }
            rsvps {
              yesCount
            }
          }
        }
      }
    }
  }
`;

export const fetchNextEvent = async (): Promise<Event[]> => {
  const response = await client.request<NextEventsQueryResponse>(queryForNextEvents, { id: LYONJS_MEETUP_ID });
  return response?.group?.events?.edges?.map((it) => it.node) || null;
};
