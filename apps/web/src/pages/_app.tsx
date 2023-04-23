import { AALGlobalCSS } from '@kaiju-ui/theme';
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

AALGlobalCSS();

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: MyAppProps) {
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
