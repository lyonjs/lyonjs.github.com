import React from 'react';
import { IconProps } from './types';

export const Check: React.FC<IconProps> = ({ color = 'currentColor', size = 16 }) => (
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
    <polyline points="20 6 9 17 4 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
