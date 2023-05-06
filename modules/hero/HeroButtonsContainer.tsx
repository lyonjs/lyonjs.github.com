import styles from './HeroButtonsContainer.module.css';
import React from 'react';

type Props = {
  children?: any;
};
export const HeroButtonsContainer: React.FC<Props> = ({ children }) => {
  return <div className={styles.buttons}>{children}</div>;
};
