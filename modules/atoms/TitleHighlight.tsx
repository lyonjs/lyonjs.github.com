import type { FC } from 'react';

export const TitleHighlight: FC<{ children: any; Component?: keyof JSX.IntrinsicElements }> = ({
  children,
  Component = 'h3',
}) => {
  return (
    <Component className="text-4xl mb-5 tracking-wide leading-normal">
      <span className="highlight">{children}</span>
    </Component>
  );
};
