import Head from 'next/head';
import Introduction from 'components/Home/Introduction';
import DashboardInfo from 'components/Home/DashboardInfo';
import { HomeContainer } from '../styles/Home.styles';
import Inspiration from 'components/Home/Inspiration';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

const Home = (): JSX.Element => {
  const { data } = useSession();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Head>
        <title>Home - Build Your Trip</title>
      </Head>
      <HomeContainer>
        <Introduction />
        <DashboardInfo />
        <Inspiration />
      </HomeContainer>
    </>
  );
};

Home.isAuthenticated = true;
export default Home;
