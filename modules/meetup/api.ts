import { gql, GraphQLClient } from 'graphql-request';
import { Event } from '../event/types';

const client = new GraphQLClient('https://www.meetup.com/gql');
const query = gql`
  query meetupEvents($id: ID!) {
    group(id: $id) {
      id
      name
      pastEvents(input: { first: 5000 }) {
        edges {
          node {
            id
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

const eventQuery = gql`
  query meetupEvent($id: ID!) {
    event(id: $id) {
      id
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
`;

type SingleEventResponseType = {
  event: Event;
};

type Edges<T> = {
  edges: Array<{
    node: T;
  }>;
};

type ResponseType = {
  group: {
    id: string;
    name: string;
    upcomingEvents: Edges<Event>;
    pastEvents: Edges<Event>;
  };
};

export const fetchMeetupEvents = async (): Promise<{ nextEvent: Event; pastEvents: Array<Event> }> => {
  const meetupEventsResponse = await client.request<ResponseType>(query, { id: 18305583 });
  const nextEvent = meetupEventsResponse?.group?.upcomingEvents?.edges?.[0]?.node || null;
  const pastEvents = meetupEventsResponse?.group?.pastEvents?.edges.map((it) => it.node).reverse() || [];

  return { nextEvent, pastEvents };
};

export const fetchSingleMeetup = async (meetupId: string): Promise<Event> => {
  const meetupEventsResponse = await client.request<SingleEventResponseType>(eventQuery, { id: meetupId });

  return meetupEventsResponse?.event;
};
