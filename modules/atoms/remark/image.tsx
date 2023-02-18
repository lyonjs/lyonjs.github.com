import Image from 'next/image';
import React from 'react';

export const ResponsiveImage: React.FC<{ alt: string; src: string }> = (props) => (
  <Image layout="responsive" {...props} />
);
