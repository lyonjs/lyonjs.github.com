'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import styles from './NavLink.module.css';

type NavLinkProps = React.ComponentProps<typeof Link>;

export const NavLink: FC<NavLinkProps> = ({ children, href, ...rest }) => {
  const pathname = usePathname();
  const ariaCurrent = href === pathname ? 'page' : undefined;

  return (
    <Link href={href} aria-current={ariaCurrent} className={styles.link} {...rest}>
      {children}
    </Link>
  );
};
