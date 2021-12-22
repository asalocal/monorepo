import BYTGlobalCSS from 'styles/BYT.global';
import { AppProps } from 'next/app';
import { AuthProvider } from 'context/AuthContext';
import { NavbarProvider } from 'context/NavbarContext';
import { ToastProvider } from 'context/ToastContext';
import { ModalProvider } from 'context/ModalProvider';

function MyApp({ Component, pageProps }: AppProps) {
  BYTGlobalCSS();
  return (
    <>
      <AuthProvider>
        <ModalProvider>
          <ToastProvider>
            <NavbarProvider>
              <Component {...pageProps} />
            </NavbarProvider>
          </ToastProvider>
        </ModalProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
