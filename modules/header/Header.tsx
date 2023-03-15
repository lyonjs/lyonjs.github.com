import Link from 'next/link';
import styles from './header.module.css';
import { LogoWithText } from '../icons/LogoWithText';
import { SocialLinks } from './SocialLinks';
import { Navbar } from '../navigation/Navbar';
import { MobileNavigation } from '../navigation/mobile/MobileNavigation';

export const Header = () => (
  <header className={styles.header}>
    <Link href="/">
      <LogoWithText color="var(--font-color-strong)" width="100px" backgroundColor="var(--background-page)" />
    </Link>

    <MobileNavigation />

    <Navbar className={styles.navbar} />
    <SocialLinks className={styles.socialLinks} />
  </header>
);
