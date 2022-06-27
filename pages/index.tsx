import type { NextPage } from 'next';
import { LyonJSHead } from '../modules/header/LyonJSHead';
import { Header } from '../modules/header/Header';
import { GraphQLClient, gql } from 'graphql-request';

type Event = {
  title: string;
  shortDescription: string;
  description: string;
  eventUrl: string;
  dateTime: string;
};
const Home: NextPage<{ nextEvent: Event; lastVideos: any[] }> = ({ nextEvent, lastVideos }) => {
  return (
    <>
      <LyonJSHead />
      <Header />
      <main>
        {nextEvent ? (
          <>
            <h1>Prochain LyonJS</h1>
            <p>{nextEvent.dateTime}</p>
            <h2>{nextEvent.title}</h2>
            <p>{nextEvent.description}</p>
            <a href={nextEvent.eventUrl}>S&apos;inscrire</a>
          </>
        ) : null}

        {lastVideos ? (
          <>
            <h1>Précédentes sessions</h1>
            {lastVideos.map((video) => (
              <>
                <h2>{video.snippet.title}</h2>
                <p>{video.snippet.description}</p>
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </>
            ))}
          </>
        ) : null}
      </main>
    </>
  );
};

export async function getStaticProps() {
  return { props: {} };
  // const client = new GraphQLClient('https://www.meetup.com/gql');
  // const query = gql`
  //   query getGroupTopicCategory($id: ID!) {
  //     group(id: $id) {
  //       id
  //       name
  //       upcomingEvents(input: {}) {
  //         edges {
  //           node {
  //             title
  //             description
  //             eventUrl
  //             dateTime
  //           }
  //         }
  //       }
  //     }
  //   }
  // `;
  //
  // const nextEventPromise = client.request(query, { id: 18305583 });
  //
  // const lastVideoSearchParam = new URLSearchParams();
  // lastVideoSearchParam.append('part', 'snippet,id');
  // lastVideoSearchParam.append('channelId', 'UCGTVc5PnIgAUoA2D2_6nJLg');
  // lastVideoSearchParam.append('maxResults', '10');
  // lastVideoSearchParam.append('order', 'date');
  // lastVideoSearchParam.append('key', 'AIzaSyBqsYMTSYzA2-TJRwR2lNCDToh7R4ONbHY');
  //
  // const lastVideosPromise = fetch(
  //   'https://youtube.googleapis.com/youtube/v3/search?' + lastVideoSearchParam.toString(),
  //   {
  //     headers: {
  //       Accept: 'application/json',
  //     },
  //   },
  // ).then((it) => it.json());
  //
  // const [nextEvent, lastVideos] = await Promise.all([nextEventPromise, lastVideosPromise]);
  //
  // return {
  //   props: {
  //     nextEvent: nextEvent?.group?.upcomingEvents?.edges?.[0]?.node || null,
  //     lastVideos: lastVideos?.items,
  //   },
  // };
}

export default Home;
