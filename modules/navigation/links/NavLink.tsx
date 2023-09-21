'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import styles from './NavLink.module.css';

type NavLinkProps = React.ComponentProps<typeof Link> & { activeOnNestedRoute?: boolean };

export const NavLink: FC<NavLinkProps> = ({ children, href, activeOnNestedRoute = false, ...rest }) => {
  const pathname = usePathname();
  const isActive = activeOnNestedRoute ? pathname.startsWith(href.toString()) : pathname === href;
  const ariaCurrent = isActive ? 'page' : undefined;

  return (
    <Link href={href} aria-current={ariaCurrent} className={styles.link} {...rest}>
      {children}
    </Link>
  );
};
