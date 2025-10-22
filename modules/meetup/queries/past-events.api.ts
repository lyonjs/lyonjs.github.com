import { Event } from '../../event/types';
import { gql } from 'graphql-request';
import { client, Edges, LYONJS_MEETUP_ID } from '../api';

type ResponseType = {
  group: {
    events: Edges<Event>;
  };
};

const query = gql`
  query meetupEvents($id: ID!) {
    group(id: $id) {
      events(first: 1000, status: PAST, sort: ASC) {
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

export const fetchPastEvents = async (): Promise<Array<Event>> => {
  const meetupEventsResponse = await client.request<ResponseType>(query, { id: LYONJS_MEETUP_ID });
  const pastEvents = meetupEventsResponse?.group?.events?.edges.map((it) => it.node).reverse() || [];

  return pastEvents;
};
