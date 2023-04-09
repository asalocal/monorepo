import BYTGlobalCSS from 'styles/BYT.global';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { AuthProvider } from 'context/AuthContext';
import { NavbarProvider } from 'context/NavbarContext';
import { ToastProvider } from 'context/ToastContext';
import { ScheduleProvider } from 'context/ScheduleContext';
import ErrorBoundary from 'components/ErrorBoundary';
import { Inter } from '@next/font/google';

interface MyAppProps extends AppProps {
  Component: AppProps['Component'] & { Layout: React.ComponentType };
}

const inter = Inter({ subsets: ['latin'] });

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: MyAppProps) {
  BYTGlobalCSS();
  return (
    <main className={inter.className}>
      <ErrorBoundary>
        <SessionProvider session={session}>
          <ToastProvider>
            <AuthProvider>
              <NavbarProvider>
                <ScheduleProvider>
                  {Component.Layout ? (
                    <Component.Layout>
                      <Component {...pageProps} />
                    </Component.Layout>
                  ) : (
                    <Component {...pageProps} />
                  )}
                </ScheduleProvider>
              </NavbarProvider>
            </AuthProvider>
          </ToastProvider>
        </SessionProvider>
      </ErrorBoundary>
    </main>
  );
}

export default MyApp;
