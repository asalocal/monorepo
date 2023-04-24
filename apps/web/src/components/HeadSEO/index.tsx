import React, { useMemo } from 'react';
import Head from 'next/head';

interface HeadSEOProps {
  title: string;
  children?: React.ReactNode;
}

function HeadSEO({ title = '', children }: HeadSEOProps) {
  const message = useMemo(() => {
    return `${title} - As A Local`;
  }, [title]);

  return (
    <Head>
      <title>{message}</title>
      {children}
    </Head>
  );
}

export default HeadSEO;
