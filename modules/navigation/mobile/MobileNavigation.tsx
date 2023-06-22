'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MobileNavigationButton } from './button/MobileNavigationButton';
import styles from './MobileNavigation.module.css';
import { MobileNavigationPanel } from './panel/MobileNavigationPanel';

export const MobileNavigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsExpanded(false);
  }, [pathname]);

  useEffect(() => {
    document.body.toggleAttribute('data-lock-scroll', isExpanded);
  }, [isExpanded]);

  return (
    <>
      <MobileNavigationPanel id="mobile-navigation" className={styles.mobilePanel} expanded={isExpanded} />
      <MobileNavigationButton
        className={styles.mobileButton}
        aria-controls="mobile-navigation"
        aria-expanded={!!isExpanded}
        onClick={() => setIsExpanded((expanded) => !expanded)}
      />
    </>
  );
};
