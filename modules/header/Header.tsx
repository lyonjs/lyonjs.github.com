import Link from 'next/link';
import styles from './header.module.css';
import { LogoWithText } from '../icons/LogoWithText';
import { Meetup } from '../icons/Meetup';
import { Twitter } from '../icons/Twitter';
import { Slack } from '../icons/Slack';
import { Youtube } from '../icons/Youtube';
import { Reddit } from '../icons/Reddit';
import { useState } from 'react';
import { BurgerMenu } from '../icons/BurgerMenu';
import { Delete } from '../icons/Delete';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => {
    setIsMenuOpen(true);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.burgerMenuContainer}>
          <button className={styles.burgerMenu} onClick={openMenu}>
            <BurgerMenu color="currentColor" size={32} />
          </button>
        </div>
        <nav className={styles.leftNav}>
          <Link href="/">
            <LogoWithText
              color="var(--foreground-color)"
              width="151px"
              height="104px"
              backgroundColor="var(--background-color)"
            />
          </Link>
        </nav>
        <nav className={styles.rightNav} style={isMenuOpen ? { transform: 'translateX(0)' } : {}} onClick={closeMenu}>
          <div className={styles.closeMenuContainer}>
            <button className={styles.closeMenu} onClick={closeMenu}>
              <Delete color="currentColor" size={32} />
            </button>
          </div>
          <ul className={styles.socialsLinks}>
            <li>
              <a
                href="https://www.meetup.com/fr-FR/LyonJS/"
                target="_blank"
                rel="noreferrer noopener"
                title="La page Meetup du LyonJS"
              >
                <Meetup color="currentColor" size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/lyonjs"
                target="_blank"
                rel="noreferrer noopener"
                title="Compte Twitter du LyonJS"
              >
                <Twitter color="currentColor" size={24} />
              </a>
            </li>
            <li>
              <a
                href="http://bit.ly/lyonjs-slack"
                target="_blank"
                rel="noreferrer noopener"
                title="Rejoindre le Slack du LyonJS"
              >
                <Slack color="currentColor" size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCGTVc5PnIgAUoA2D2_6nJLg"
                target="_blank"
                rel="noreferrer noopener"
                title="La chaîne Youtube du LyonJS"
              >
                <Youtube color="currentColor" size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.reddit.com/r/LyonJS/"
                target="_blank"
                rel="noreferrer noopener"
                title="Groupe Reddit LyonJS"
              >
                <Reddit color="currentColor" size={24} />
              </a>
            </li>
          </ul>
          <ul className={styles.links}>
            <li>
              <Link href="/" className={styles.link}>
                Evènements
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.link}>
                A&nbsp;propos
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.link}>
                Contact
              </Link>
            </li>
            <li>
              <a
                className={styles.buttonPrimary}
                href="https://bit.ly/lyonjs-cfp"
                target="_blank"
                rel="noreferrer noopener"
              >
                Proposer&nbsp;un&nbsp;sujet
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
