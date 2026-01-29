import { cache } from 'react';
import { gql } from 'graphql-request';
import { Event } from '../../event/types';
import { client, LYONJS_MEETUP_ID } from '../api';

const query = gql`
  query meetup($id: ID!) {
    event(id: $id) {
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
      group {
        id
      }
    }
  }
`;

type Response = {
  event: Event;
};
export const fetchEvent = cache(async (id: string): Promise<Event> => {
  const response = await client.request<Response>(query, { id });

  if (response?.event.group.id !== `${LYONJS_MEETUP_ID}`) {
    throw Error(`event of id is not part of LyonJS`);
  }

  return response?.event;
});
