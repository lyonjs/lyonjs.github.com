import classNames from 'classnames';
import Link from 'next/link';
import type { FC, DetailedHTMLProps, ButtonHTMLAttributes, ComponentPropsWithRef } from 'react';
import styles from './Button.module.css';

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
type AnchorProps = ComponentPropsWithRef<typeof Link>;

type CustomProps = {
  variant?: 'primary' | 'secondary';
};

export const Button: FC<ButtonProps & CustomProps> = ({ children, className, variant = 'primary', ...props }) => (
  <button type="button" className={classNames(styles.button, styles[variant], className)} {...props}>
    {children}
  </button>
);

export const ButtonLink: FC<AnchorProps & CustomProps> = ({ children, className, variant = 'primary', ...props }) => (
  <Link className={classNames(styles.button, styles[variant], className)} {...props}>
    {children}
  </Link>
);
