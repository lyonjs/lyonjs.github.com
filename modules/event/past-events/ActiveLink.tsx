import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styles from './ActiveLink.module.css';

type ActiveLinkProps = React.ComponentProps<typeof Link>;

export const ActiveLink: FC<ActiveLinkProps> = ({ children, href, ...rest }) => {
  const { asPath } = useRouter();
  const ariaCurrent = href === asPath ? 'page' : undefined;

  return (
    <Link href={href} aria-current={ariaCurrent} className={styles.link} {...rest}>
      {children}
    </Link>
  );
};
