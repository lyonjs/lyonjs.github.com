import { gql, GraphQLClient } from 'graphql-request';
import { Event } from '../event/types';

export const client = new GraphQLClient('https://www.meetup.com/gql');
export const LYONJS_MEETUP_ID = 18305583;

export type Edges<T> = {
  edges: Array<{
    node: T;
  }>;
};
