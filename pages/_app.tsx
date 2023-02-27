import 'normalize.css';
import '../styles/globals.css';
import 'dayjs/locale/fr';
import dayjs from 'dayjs';
import type { AppProps } from 'next/app';
import React from 'react';
import { Header } from '../modules/header/Header';
import { Footer } from '../modules/footer/Footer';

dayjs.locale('fr');

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
