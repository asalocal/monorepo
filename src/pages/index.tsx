import Head from 'next/head';
import Introduction from 'components/Home/Introduction';
import DashboardInfo from 'components/Home/DashboardInfo';
import { HomeContainer } from '../styles/Home.styles';
import { useModal } from 'context/ModalProvider';
import { useEffect } from 'react';
import Inspiration from 'components/Home/Inspiration';

const Home = (): JSX.Element => {
  const { openModal } = useModal();

  useEffect(() => {
    openModal(true);
  }, [openModal]);
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
