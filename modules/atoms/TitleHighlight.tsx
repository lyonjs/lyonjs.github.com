import type { FC } from 'react';

export const TitleHighlight: FC<{ children: any; Component?: keyof JSX.IntrinsicElements; className?: string }> = ({
  children,
  Component = 'h3',
  className,
}) => {
  return (
    <Component className={`text-4xl mb-5 tracking-wide leading-normal ${className}`}>
      <span className="highlight">{children}</span>
    </Component>
  );
};
