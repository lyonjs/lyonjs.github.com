import classNames from 'classnames';
import type { FC, HTMLAttributes } from 'react';
import styles from './Heading.module.css';

type HeadingLevel = `h${1 | 2 | 3 | 4 | 5 | 6}`;

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  Component: HeadingLevel;
  appearance?: HeadingLevel;
  centered?: boolean;
};

export const Heading: FC<HeadingProps> = ({
  children,
  Component = 'h3',
  appearance,
  centered,
  className,
  ...attributes
}) => (
  <Component
    className={classNames(styles[appearance || Component], { [styles.centered]: centered }, className)}
    {...attributes}
  >
    {children}
  </Component>
);
