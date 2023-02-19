import 'normalize.css';
import '../styles/globals.css';
import 'dayjs/locale/fr';
import dayjs from 'dayjs';
import type { AppProps } from 'next/app';
import React from 'react';
import { H1, H2 } from '../modules/atoms/remark/titles';
import { A, Li, P, Ul } from '../modules/atoms/remark/text';
import { ResponsiveImage } from '../modules/atoms/remark/image';

dayjs.locale('fr');

const components = {
  img: ResponsiveImage,
  h1: H1,
  h2: H2,
  p: P,
  ul: Ul,
  li: Li,
  a: A,
};

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} components={components} />;
}

export default MyApp;
