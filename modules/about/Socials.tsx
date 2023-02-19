import React from 'react';
import { Reddit } from '../icons/Reddit';
import { Youtube } from '../icons/Youtube';
import { Slack } from '../icons/Slack';
import { Twitter } from '../icons/Twitter';
import { Meetup } from '../icons/Meetup';

export const Socials = () => (
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
);
