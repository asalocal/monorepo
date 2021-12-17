import Head from 'next/head';
import Introduction from 'components/Home/Introduction';
import DashboardInfo from 'components/Home/DashboardInfo';
import { HomeContainer } from '../styles/Home.styles';

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Home - Build Your Trip</title>
      </Head>
      <HomeContainer>
        <Introduction />
        <DashboardInfo />
      </HomeContainer>
    </>
  );
};

export default Home;
