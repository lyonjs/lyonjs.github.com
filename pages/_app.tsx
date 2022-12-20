import 'normalize.css';
import '../styles/globals.css';
import 'dayjs/locale/fr';
import dayjs from 'dayjs';
import type { AppProps } from 'next/app';

dayjs.locale('fr');

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
