import { gql } from 'graphql-request';
import { Event } from '../../event/types';
import { client } from '../api';

const query = gql`
  query meetup($id: ID!) {
    event(id: $id) {
      title
      description
      eventUrl
      dateTime
      imageUrl
      photoAlbum {
        photoSample(amount: 10) {
          source
        }
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
  return response?.event;
};
