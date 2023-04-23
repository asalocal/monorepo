import React from 'react';
import Head from 'next/head';

interface HeadSEOProps {
  title: string;
  children?: React.ReactNode;
}

function HeadSEO({ title = '', children }: HeadSEOProps) {
  return (
    <>
      <Head>
        <title>{title} - Build Your Trip</title>
        {children}
      </Head>
    </>
  );
}

export default HeadSEO;
