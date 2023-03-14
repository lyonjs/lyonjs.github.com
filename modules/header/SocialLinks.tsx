import classNames from 'classnames';
import { FC, HTMLAttributes } from 'react';
import { Meetup } from '../icons/Meetup';
import { Reddit } from '../icons/Reddit';
import { Slack } from '../icons/Slack';
import { Twitter } from '../icons/Twitter';
import { Youtube } from '../icons/Youtube';
import { IconLink } from '../navigation/links/IconLink';
import styles from './SocialLinks.module.css';

export const SocialLinks: FC<HTMLAttributes<HTMLElement>> = ({ className }) => (
  <ul className={classNames(styles.socialLinks, className)}>
    <li>
      <IconLink
        href="https://www.meetup.com/fr-FR/LyonJS/"
        target="_blank"
        rel="noreferrer noopener"
        title="La page Meetup du LyonJS"
        aria-label="La page Meetup du LyonJS"
      >
        <Meetup color="currentColor" size={20} />
      </IconLink>
    </li>
    <li>
      <IconLink
        href="https://twitter.com/lyonjs"
        target="_blank"
        rel="noreferrer noopener"
        title="Compte Twitter du LyonJS"
        aria-label="Compte Twitter du LyonJS"
      >
        <Twitter color="currentColor" size={20} />
      </IconLink>
    </li>
    <li>
      <IconLink
        href="http://bit.ly/lyonjs-slack"
        target="_blank"
        rel="noreferrer noopener"
        title="Rejoindre le Slack du LyonJS"
        aria-label="Rejoindre le Slack du LyonJS"
      >
        <Slack color="currentColor" size={20} />
      </IconLink>
    </li>
    <li>
      <IconLink
        href="https://www.youtube.com/channel/UCGTVc5PnIgAUoA2D2_6nJLg"
        target="_blank"
        rel="noreferrer noopener"
        title="La chaîne Youtube du LyonJS"
        aria-label="La chaîne Youtube du LyonJS"
      >
        <Youtube color="currentColor" size={20} />
      </IconLink>
    </li>
    <li>
      <IconLink
        href="https://www.reddit.com/r/LyonJS/"
        target="_blank"
        rel="noreferrer noopener"
        title="Groupe Reddit LyonJS"
        aria-label="Groupe Reddit LyonJS"
      >
        <Reddit color="currentColor" size={20} />
      </IconLink>
    </li>
  </ul>
);
