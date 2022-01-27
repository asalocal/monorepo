import BYTGlobalCSS from 'styles/BYT.global';
import { AppProps } from 'next/app';
import { AuthProvider } from 'context/AuthContext';
import { NavbarProvider } from 'context/NavbarContext';
import { ToastProvider } from 'context/ToastContext';
import Page from 'components/Page';

interface MyAppProps extends AppProps {
  Component: AppProps['Component'] & { isAuthenticated: boolean };
}

function MyApp({ Component, pageProps }: MyAppProps) {
  BYTGlobalCSS();
  return (
    <>
      <AuthProvider>
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
      </AuthProvider>
    </>
  );
}

export default MyApp;
