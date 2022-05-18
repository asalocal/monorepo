import BYTGlobalCSS from 'styles/BYT.global';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { AuthProvider } from 'context/AuthContext';
import { NavbarProvider } from 'context/NavbarContext';
import { ToastProvider } from 'context/ToastContext';
import Page from 'components/Page';
import { ScheduleProvider } from 'context/ScheduleContext';
import ErrorBoundary from 'components/ErrorBoundary';

interface MyAppProps extends AppProps {
  Component: AppProps['Component'] & { isAuthenticated: boolean };
}

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: MyAppProps) {
  BYTGlobalCSS();
  return (
    <>
      <ErrorBoundary>
        <SessionProvider session={session}>
          <ToastProvider>
            <NavbarProvider>
              <ScheduleProvider>
                {!Component.isAuthenticated ? (
                  <Component {...pageProps} />
                ) : (
                  <Page>
                    <Component {...pageProps} />
                  </Page>
                )}
              </ScheduleProvider>
            </NavbarProvider>
          </ToastProvider>
        </SessionProvider>
      </ErrorBoundary>
    </>
  );
}

export default MyApp;
