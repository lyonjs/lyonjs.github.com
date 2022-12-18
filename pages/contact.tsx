import type { NextPage } from 'next';
import React from 'react';
import { LyonJSHead } from '../modules/header/LyonJSHead';
import { Header } from '../modules/header/Header';
import { TitleHighlight } from '../modules/atoms/TitleHighlight';
import { orgas } from '../data/orgas';
import { Twitter } from '../modules/icons/Twitter';
import { Linkedin } from '../modules/icons/Linkedin';
import { Meetup } from '../modules/icons/Meetup';
import { Slack } from '../modules/icons/Slack';
import { Youtube } from '../modules/icons/Youtube';
import { Reddit } from '../modules/icons/Reddit';

const Home: NextPage = () => {
  return (
    <>
      <LyonJSHead />
      <Header />
      <main>
        <h1 className="text-sm text-gray-400 my-4">
          Contact du Lyon JS : la communauté lyonnaise des utilisateurs de JavaScript
        </h1>
        <TitleHighlight Component="h2">Contact</TitleHighlight>
        <p className="my-4">
          Parce qu&apos;une communauté ne vit que par les discussions et les rencontres régulières de ses membres,
          participez à l&apos;organisation et à la vie de LyonJS sur les différents groupes de discussion et réseaux.
        </p>
        <ul className="grid md:grid-cols-5 grid-cols-2 gap-12 mb-4 mt-12">
          <li>
            <a
              href="https://www.meetup.com/fr-FR/LyonJS/"
              target="_blank"
              rel="noreferrer noopener"
              title="La page Meetup du LyonJS"
              className="flex gap-[1ch] text-lyonjs-yellow text-xl"
            >
              <Meetup color="currentColor" size={32} />
              Meetup
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/lyonjs"
              target="_blank"
              rel="noreferrer noopener"
              title="Compte Twitter du LyonJS"
              className="flex gap-[1ch] text-lyonjs-yellow text-xl"
            >
              <Twitter color="currentColor" size={32} />
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://bit.ly/lyonjs-slack"
              target="_blank"
              rel="noreferrer noopener"
              title="Rejoindre le Slack du LyonJS"
              className="flex gap-[1ch] text-lyonjs-yellow text-xl"
            >
              <Slack color="currentColor" size={32} />
              Slack
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCGTVc5PnIgAUoA2D2_6nJLg"
              target="_blank"
              rel="noreferrer noopener"
              title="La chaîne Youtube du LyonJS"
              className="flex gap-[1ch] text-lyonjs-yellow text-xl"
            >
              <Youtube color="currentColor" size={32} />
              Youtube
            </a>
          </li>
          <li>
            <a
              href="https://www.reddit.com/r/LyonJS/"
              target="_blank"
              rel="noreferrer noopener"
              title="Groupe Reddit LyonJS"
              className="flex gap-[1ch] text-lyonjs-yellow text-xl"
            >
              <Reddit color="currentColor" size={32} />
              Reddit
            </a>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Home;
