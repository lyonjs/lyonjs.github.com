import classNames from 'classnames';
import Link from 'next/link';
import type { FC, ComponentPropsWithRef } from 'react';
import styles from './Button.module.css';

type AnchorProps = ComponentPropsWithRef<typeof Link>;

type CustomProps = {
  variant?: 'primary' | 'secondary';
};

export const ButtonLink: FC<AnchorProps & CustomProps> = ({ children, className, variant = 'primary', ...props }) => (
  <Link className={classNames(styles.button, styles[variant], className)} {...props}>
    {children}
  </Link>
);
