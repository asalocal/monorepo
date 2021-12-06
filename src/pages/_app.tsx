import BYTGlobalCSS from 'styles/BYT.global';
import { AppProps } from 'next/app';
import { AuthProvider } from 'context/AuthContext';
import { NavbarProvider } from 'context/NavbarContext';

function MyApp({ Component, pageProps }: AppProps) {
  BYTGlobalCSS();
  return (
    <>
      <AuthProvider>
        <NavbarProvider>
          <Component {...pageProps} />
        </NavbarProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
