import { GraphQLClient } from 'graphql-request';
export const client = new GraphQLClient('https://www.meetup.com/gql', { fetch });
export const LYONJS_MEETUP_ID = 18305583;

export type Edges<T> = {
  edges: Array<{
    node: T;
  }>;
};
