import type { NextPage, GetStaticProps } from 'next';
import { GraphQLClient, gql } from 'graphql-request';
import React from 'react';
import type { Event } from '../modules/event/types';
import { LyonJSHead } from '../modules/header/LyonJSHead';
import { Header } from '../modules/header/Header';
import { EventCard } from '../modules/event/EventCard';

type Props = { nextEvent: Event; lastVideos: any[] };
const Home: NextPage<Props> = ({ nextEvent, lastVideos }) => {
  return (
    <>
      <LyonJSHead />
      <Header />
      <main>
        <h1 className="text-sm text-gray-400 my-4">
          Bienvenue au Lyon JS : la communauté lyonnaise des utilisateurs de JavaScript
        </h1>
        <h2 className="text-xl my-4">Prochain évènement</h2>
        {nextEvent ? <EventCard event={nextEvent} /> : <p>Pas de prochain LyonJS de trouvé !</p>}

        {/*{lastVideos ? (*/}
        {/*  <>*/}
        {/*    <h1>Précédentes sessions</h1>*/}
        {/*    {lastVideos.map((video) => (*/}
        {/*      <React.Fragment key={video.id}>*/}
        {/*        <h2>{video.snippet.title}</h2>*/}
        {/*        <p>{video.snippet.description}</p>*/}
        {/*        <iframe*/}
        {/*          width="560"*/}
        {/*          height="315"*/}
        {/*          src={`https://www.youtube.com/embed/${video.id.videoId}`}*/}
        {/*          title="YouTube video player"*/}
        {/*          frameBorder="0"*/}
        {/*          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
        {/*          allowFullScreen*/}
        {/*        ></iframe>*/}
        {/*      </React.Fragment>*/}
        {/*    ))}*/}
        {/*  </>*/}
        {/*) : null}*/}
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const client = new GraphQLClient('https://www.meetup.com/gql');
  const query = gql`
    query nextEvents($id: ID!) {
      group(id: $id) {
        id
        name
        pastEvents(input: { first: 5000 }) {
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
  const nextEventPromise = client.request<ResponseType>(query, { id: 18305583 });

  const lastVideoSearchParam = new URLSearchParams();
  lastVideoSearchParam.append('part', 'snippet,id');
  lastVideoSearchParam.append('channelId', 'UCGTVc5PnIgAUoA2D2_6nJLg');
  lastVideoSearchParam.append('maxResults', '10');
  lastVideoSearchParam.append('order', 'date');
  lastVideoSearchParam.append('key', process.env.YOUTUBE_API_KEY || '');

  const lastVideosPromise = fetch(
    'https://youtube.googleapis.com/youtube/v3/search?' + lastVideoSearchParam.toString(),
    {
      headers: {
        Accept: 'application/json',
      },
    },
  ).then((it) => it.json());

  const [nextEvent, lastVideos] = await Promise.all([nextEventPromise, lastVideosPromise]);

  return {
    props: {
      nextEvent: nextEvent?.group?.upcomingEvents?.edges?.[0]?.node || null,
      lastVideos: lastVideos?.items,
    },
  };
};

export default Home;
