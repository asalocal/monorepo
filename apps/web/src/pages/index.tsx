import Head from 'next/head';
import { HomeContainer } from '../styles/Home.styles';
import Page from '../components/Page';
import HeadSEO from '../components/HeadSEO';
import Introduction from '../components/Home/Introduction';
import Inspiration from '../components/Home/Inspiration';
import React from 'react';

export default function Home() {
  return (
    <HomeContainer>
      <HeadSEO title="Home" />
      <Introduction />
      <Inspiration />
    </HomeContainer>
  );
}

Home.Layout = Page;
