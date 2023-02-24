import { FC } from 'react';
import { Heading, HeadingProps } from '../Heading';

type HProps = Omit<HeadingProps, 'Component'>;

export const H1: FC<HProps> = (props) => <Heading Component="h1" {...props} />;

export const H2: FC<HProps> = (props) => <Heading Component="h2" {...props} />;

export const H3: FC<HProps> = (props) => <Heading Component="h3" {...props} />;
