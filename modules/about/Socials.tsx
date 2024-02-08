import React from 'react';
import { Reddit } from '../icons/Reddit';
import { Youtube } from '../icons/Youtube';
import { Twitter } from '../icons/Twitter';
import { Meetup } from '../icons/Meetup';
import { IconLink } from '../navigation/links/IconLink';
import styles from './Socials.module.css';
import { Linkedin } from '../icons/Linkedin';
import { Discord } from '../icons/Discord';

export const Socials = () => (
  <ul className={styles.socialsContainer}>
    <li>
      <IconLink
        href="https://www.meetup.com/fr-FR/LyonJS/"
        target="_blank"
        rel="noreferrer noopener"
        title="La page Meetup du LyonJS"
      >
        <Meetup color="currentColor" size={32} />
      </IconLink>
    </li>
    <li>
      <IconLink
        href="https://twitter.com/lyonjs"
        target="_blank"
        rel="noreferrer noopener"
        title="Compte Twitter du LyonJS"
      >
        <Twitter color="currentColor" size={32} />
      </IconLink>
    </li>
    <li>
      <IconLink
        href="https://discord.gg/FytXQwFsG8"
        target="_blank"
        rel="noreferrer noopener"
        title="Rejoindre le Discord du LyonJS"
      >
        <Discord color="currentColor" size={32} />
      </IconLink>
    </li>
    <li>
      <IconLink
        href="https://www.linkedin.com/company/lyonjs"
        target="_blank"
        rel="noreferrer noopener"
        title="Suivre la page linkedin du LyonJS"
      >
        <Linkedin color="currentColor" size={32} />
      </IconLink>
    </li>
    <li>
      <IconLink
        href="https://www.youtube.com/channel/UCGTVc5PnIgAUoA2D2_6nJLg"
        target="_blank"
        rel="noreferrer noopener"
        title="La chaîne Youtube du LyonJS"
      >
        <Youtube color="currentColor" size={32} />
      </IconLink>
    </li>
    <li>
      <IconLink
        href="https://www.reddit.com/r/LyonJS/"
        target="_blank"
        rel="noreferrer noopener"
        title="Groupe Reddit LyonJS"
      >
        <Reddit color="currentColor" size={32} />
      </IconLink>
    </li>
  </ul>
);
