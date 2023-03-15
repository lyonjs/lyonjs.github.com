import { FC, PropsWithChildren } from 'react';
import { ButtonLink } from '../atoms/button/Button';
import { H2 as Heading2 } from '../atoms/remark/Titles';
import styles from './Home.module.css';

export const Article: FC<PropsWithChildren> = ({ children }) => (
  <article className={styles.article}>{children}</article>
);

export const H2: FC<PropsWithChildren> = ({ children }) => (
  <Heading2 appearance="h1" centered className={styles.secondaryTitle}>
    {children}
  </Heading2>
);

export const SeePastEvents = () => (
  <div className={styles.seePastEvents}>
    <ButtonLink variant="secondary" href={`/evenements-precedents/${new Date().getFullYear()}`}>
      Voir les événements passés <span aria-hidden="true">&rarr;</span>
    </ButtonLink>
  </div>
);
