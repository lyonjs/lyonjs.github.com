import { gql } from 'graphql-request';
import { client, Edges } from '../api';

type Response = {
  group: {
    pastEvents: Edges<{ dateTime: string }>;
  };
};

const queryForYears = gql`
  query meetupYears($id: ID!) {
    group(id: $id) {
      pastEvents(input: { first: 5000 }) {
        edges {
          node {
            dateTime
          }
        }
      }
    }
  }
`;

export const fetchYearsWithMeetups = async (): Promise<Set<string>> => {
  const meetupEventsResponse = await client.request<Response>(queryForYears, { id: 18305583 });
  const years = new Set<string>();
  meetupEventsResponse?.group?.pastEvents?.edges.forEach((it) => {
    years.add(new Date(it.node.dateTime).getFullYear().toString());
  });

  return years;
};
