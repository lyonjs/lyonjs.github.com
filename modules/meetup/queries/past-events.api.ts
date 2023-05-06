import { Event } from '../../event/types';
import { gql } from 'graphql-request';
import { client, Edges, LYONJS_MEETUP_ID } from '../api';

type ResponseType = {
  group: {
    pastEvents: Edges<Event>;
  };
};

const query = gql`
  query meetupEvents($id: ID!) {
    group(id: $id) {
      pastEvents(input: { first: 5000 }) {
        edges {
          node {
            id
            title
            eventUrl
            dateTime
            imageUrl
          }
        }
      }
    }
  }
`;

export const fetchPastEvents = async (): Promise<Array<Event>> => {
  const meetupEventsResponse = await client.request<ResponseType>(query, { id: LYONJS_MEETUP_ID });
  const pastEvents = meetupEventsResponse?.group?.pastEvents?.edges.map((it) => it.node).reverse() || [];

  return pastEvents;
};
