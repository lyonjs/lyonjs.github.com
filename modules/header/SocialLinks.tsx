import classNames from 'classnames';
import { FC, HTMLAttributes } from 'react';
import { Meetup } from '../icons/Meetup';
import { Reddit } from '../icons/Reddit';
import { Discord } from '../icons/Discord';
import { Twitter } from '../icons/Twitter';
import { Youtube } from '../icons/Youtube';
import { IconLink } from '../navigation/links/IconLink';
import styles from './SocialLinks.module.css';
import { Linkedin } from '../icons/Linkedin';
import { Bluesky } from '../icons/Bluesky';

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
        href="https://bsky.app/profile/lyonjs.org"
        target="_blank"
        rel="noreferrer noopener"
        title="Compte Bluesky du LyonJS"
        aria-label="Compte Bluesky du LyonJS"
      >
        <Bluesky color="currentColor" size={20} />
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
        href="https://discord.gg/FytXQwFsG8"
        target="_blank"
        rel="noreferrer noopener"
        title="Rejoindre le Discord du LyonJS"
        aria-label="Rejoindre le Discord du LyonJS"
      >
        <Discord color="currentColor" size={20} />
      </IconLink>
    </li>
    <li>
      <IconLink
        href="https://www.linkedin.com/company/lyonjs"
        target="_blank"
        rel="noreferrer noopener"
        title="La page Linkedin du LyonJS"
        aria-label="La page Linkedin du LyonJS"
      >
        <Linkedin color="currentColor" size={20} />
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
