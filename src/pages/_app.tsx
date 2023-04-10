import BYTGlobalCSS from 'styles/BYT.global';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { AuthProvider } from 'context/AuthContext';
import { NavbarProvider } from 'context/NavbarContext';
import { ToastProvider } from 'context/ToastContext';
import { ScheduleProvider } from 'context/ScheduleContext';
import { useLayoutEffect } from 'react';

export interface MyAppProps extends AppProps {
  Component: any;
}

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: MyAppProps) {
  useLayoutEffect(() => {
    BYTGlobalCSS();
  }, []);

  return (
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
  );
}

export default MyApp;
