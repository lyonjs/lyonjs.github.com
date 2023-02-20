import 'normalize.css';
import '../styles/globals.css';
import 'dayjs/locale/fr';
import dayjs from 'dayjs';
import type { AppProps } from 'next/app';
import React from 'react';
import { H1, H2 } from '../modules/atoms/remark/titles';
import { A, Li, P, Ul } from '../modules/atoms/remark/text';
import { ResponsiveImage } from '../modules/atoms/remark/image';
import { Header } from '../modules/header/Header';
import { Footer } from '../modules/Footer';

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
  return (
    <>
      <Header />
      <Component {...pageProps} components={components} />
      <Footer />
    </>
  );
}

export default MyApp;
