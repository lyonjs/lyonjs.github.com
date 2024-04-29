import { gql } from 'graphql-request';
import { Event } from '../../event/types';
import { client, LYONJS_MEETUP_ID } from '../api';

const query = gql`
  query meetup($id: ID!) {
    event(id: $id) {
      title
      description
      eventUrl
      dateTime
      imageUrl
      photoAlbum {
        photoSample(amount: 20) {
          source
        }
      }
      group {
        id
      }
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

type Response = {
  event: Event;
};
export const fetchEvent = async (id: string): Promise<Event> => {
  const response = await client.request<Response>(query, { id });

  if (response?.event.group.id !== `${LYONJS_MEETUP_ID}`) {
    throw Error(`event of id is not part of LyonJS`);
  }

  return response?.event;
};
