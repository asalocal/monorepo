import BYTGlobalCSS from 'styles/BYT.global';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  BYTGlobalCSS();
  return <Component {...pageProps} />;
}

export default MyApp;
