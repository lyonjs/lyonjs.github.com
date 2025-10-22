import { gql } from 'graphql-request';
import { client, type Edges, LYONJS_MEETUP_ID } from '../api';
import type { Event } from '../../event/types';

const query = gql`
  query meetupEvents($id: ID!) {
    group(id: $id) {
      events(first: 1000, status: PAST, sort: DESC) {
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

const getAge = (): number => {
  const today = new Date();
  const birthDate = new Date('2011-10-25');
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

type Response = {
  group: {
    events: Edges<Event>;
  };
};

type Numbers = {
  value: number;
  text: string;
};
export const fetchNumbers = async (): Promise<Numbers[]> => {
  const response = await client.request<Response>(query, { id: LYONJS_MEETUP_ID });
  const pastEvents = response.group.events;
  const numberOfEvents = pastEvents.edges.length + 27;
  const goingToEventCount = pastEvents.edges.reduce((acc, { node }) => {
    acc += node.rsvps.yesCount;
    return acc;
  }, 0);

  return [
    {
      value: numberOfEvents,
      text: 'Événements organisés',
    },
    {
      value: 4050,
      text: 'Inscrits sur Meetup',
    },
    {
      value: getAge(),
      text: "Années d'activité",
    },
    {
      value: goingToEventCount,
      text: 'Participants au total',
    },
  ];
};
