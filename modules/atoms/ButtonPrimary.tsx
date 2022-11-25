import type { FC, DetailedHTMLProps, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

const baseClassName = 'flex no-underline px-8 py-2 bg-lyonjs-yellow text-black hover:bg-lyonjs-yellow-dark text-lg';

export const ButtonPrimary: FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => (
  <button type="button" className={className ? `${className} ${baseClassName}` : baseClassName} {...props}>
    {children}
  </button>
);

export const LinkPrimary: FC<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>> = ({
  children,
  className,
  ...props
}) => (
  <a className={className ? `${className} ${baseClassName}` : baseClassName} {...props}>
    {children}
  </a>
);
