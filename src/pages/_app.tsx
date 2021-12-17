import BYTGlobalCSS from 'styles/BYT.global';
import { AppProps } from 'next/app';
import { AuthProvider } from 'context/AuthContext';
import { NavbarProvider } from 'context/NavbarContext';
import { ToastProvider } from 'context/ToastContext';

function MyApp({ Component, pageProps }: AppProps) {
  BYTGlobalCSS();
  return (
    <>
      <AuthProvider>
        <ToastProvider>
          <NavbarProvider>
            <Component {...pageProps} />
          </NavbarProvider>
        </ToastProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
