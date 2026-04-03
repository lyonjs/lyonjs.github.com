import React from 'react';
import { IconProps } from './types';

export const ExternalLink: React.FC<IconProps> = ({ color = 'currentColor', size = 16 }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    role="img"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M15 3h6v6M10 14L21 3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
