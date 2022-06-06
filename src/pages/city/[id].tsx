import HeadSEO from 'components/HeadSEO';
import Page from 'components/Page';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { HomeContainer } from 'styles/Home.styles';

function City() {
  const router = useRouter();

  useEffect(() => {
    console.log(router.query);
  }, [router.query]);

  return (
    <>
      <HeadSEO title="City" />
      <HomeContainer></HomeContainer>
      <h2>Testing</h2>
    </>
  );
}

City.Layout = Page;
export default City;
