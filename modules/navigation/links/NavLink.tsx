import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styles from './NavLink.module.css';

type NavLinkProps = React.ComponentProps<typeof Link>;

export const NavLink: FC<NavLinkProps> = ({ children, href, ...rest }) => {
  const { asPath } = useRouter();
  const ariaCurrent = href === asPath ? 'page' : undefined;

  return (
    <Link href={href} aria-current={ariaCurrent} className={styles.link} {...rest}>
      {children}
    </Link>
  );
};
