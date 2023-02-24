import classNames from 'classnames';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import styles from './MobileNavigationButton.module.css';

type Props = PropsWithChildren<HTMLAttributes<HTMLButtonElement>>;

export const MobileNavigationButton: FC<Props> = ({ className, ...props }) => (
  <button
    className={classNames(styles.button, className)}
    type="button"
    aria-label="Ouvrir ou fermer la navigation"
    {...props}
  >
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3H45" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M3 24H45" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M3 45H45" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  </button>
);
