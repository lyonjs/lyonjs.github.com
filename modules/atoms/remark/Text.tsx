import React from 'react';
import styles from './Text.module.css';

export const Ul: React.FC = (props) => <ul className={styles.list} {...props} />;

export const Li: React.FC = (props) => <li {...props} />;

export const P: React.FC = (props) => <p className={styles.paragraph} {...props} />;

export const A: React.FC = (props) => <a className={styles.link} {...props} />;
