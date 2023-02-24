import Link from 'next/link';
import styles from './header.module.css';
import { LogoWithText } from '../icons/LogoWithText';
import { SocialLinks } from './SocialLinks';
import { Navbar } from '../navigation/Navbar';
import { MobileNavigation } from '../navigation/mobile/MobileNavigation';

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerContainer}>
      <Link href="/">
        <LogoWithText
          color="var(--foreground-color)"
          width="151px"
          height="104px"
          backgroundColor="var(--background-color)"
        />
      </Link>

      <MobileNavigation />

      <Navbar className={styles.navbar} />
      <SocialLinks className={styles.socialLinks} />
    </div>
  </header>
);
