import { gql } from 'graphql-request';
import { client, LYONJS_MEETUP_ID } from '../api';

const query = gql`
  query meetup($id: ID!) {
    group(id: $id) {
      pastEvents(input: { first: 5000 }) {
        edges {
          node {
            going
          }
        }
      }
    }
  }
`;

type Node = {
  node: {
    going: number;
  };
};

type PastEvents = {
  pastEvents: {
    edges: Node[];
  };
};

const getAge = () => {
  var today = new Date();
  var birthDate = new Date('2011-10-25');
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

type Response = {
  group: PastEvents;
};

type Numbers = {
  value: number;
  text: string;
};
export const fetchNumbers = async (): Promise<Numbers[]> => {
  const response = await client.request<Response>(query, { id: LYONJS_MEETUP_ID });
  const pastEvents = response.group.pastEvents;
  const numberOfEvents = pastEvents.edges.length + 27;
  const goingToEventCount = pastEvents.edges.reduce((acc, { node }) => {
    acc += node.going;
    return acc;
  }, 0);

  return [
    {
      value: numberOfEvents,
      text: 'Événements organisés',
    },
    {
      value: 3400,
      text: 'Inscrits sur Meetup',
    },
    {
      value: getAge(),
      text: 'Notre age',
    },
    {
      value: goingToEventCount,
      text: 'Cumul des participants',
    },
  ];
};
