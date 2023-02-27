import classNames from 'classnames';
import type { FC, DetailedHTMLProps, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import styles from './Button.module.css';

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
type AnchorProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

type CustomProps = {
  variant?: 'primary' | 'secondary';
};

export const Button: FC<ButtonProps & CustomProps> = ({ children, className, variant = 'primary', ...props }) => (
  <button type="button" className={classNames(styles.button, styles[variant], className)} {...props}>
    {children}
  </button>
);

export const ButtonLink: FC<AnchorProps & CustomProps> = ({ children, className, variant = 'primary', ...props }) => (
  <a className={classNames(styles.button, styles[variant], className)} {...props}>
    {children}
  </a>
);
