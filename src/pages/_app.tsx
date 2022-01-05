import BYTGlobalCSS from 'styles/BYT.global';
import { AppProps } from 'next/app';
import { AuthProvider } from 'context/AuthContext';
import { NavbarProvider } from 'context/NavbarContext';
import { ToastProvider } from 'context/ToastContext';
import { ModalProvider } from 'context/ModalProvider';
import Page from 'components/Page';

interface MyAppProps extends AppProps {
  Component: AppProps['Component'] & { isAuthenticated: boolean };
}

function MyApp({ Component, pageProps }: MyAppProps) {
  BYTGlobalCSS();
  return (
    <>
      <AuthProvider>
        <ModalProvider>
          <ToastProvider>
            <NavbarProvider>
              {!Component.isAuthenticated ? (
                <Component {...pageProps} />
              ) : (
                <Page>
                  <Component {...pageProps} />
                </Page>
              )}
            </NavbarProvider>
          </ToastProvider>
        </ModalProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
