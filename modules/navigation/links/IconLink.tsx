import Link from 'next/link';
import { FC } from 'react';
import styles from './IconLink.module.css';

type IconLinkProps = React.ComponentProps<typeof Link>;

export const IconLink: FC<IconLinkProps> = ({ children, ...rest }) => (
  <Link className={styles.link} {...rest}>
    {children}
  </Link>
);
