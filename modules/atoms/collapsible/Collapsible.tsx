import React, { FC, useState } from 'react';
import classNames from 'classnames';
import styles from './Collapsible.module.css';

type Props = { children?: any; className?: string };
export const Collapsible: FC<Props> = ({ children, className }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div
        className={classNames(
          styles.collapsible,
          {
            [styles.expanded]: isExpanded,
          },
          className,
        )}
      >
        {children}
      </div>
      <button type="button" className={styles.seeMore} onClick={() => setIsExpanded((isExpanded) => !isExpanded)}>
        {isExpanded ? 'Voir moins' : 'Voir plus'}
      </button>
    </>
  );
};
