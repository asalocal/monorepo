import Head from 'next/head';
import dynamic from 'next/dynamic';
const Introduction = dynamic(() => import('components/Home/Introduction'));
const DashboardInfo = dynamic(() => import('components/Home/DashboardInfo'));
const Inspiration = dynamic(() => import('components/Home/Inspiration'));
import { HomeContainer } from '../styles/Home.styles';
import Page from 'components/Page';
import HeadSEO from 'components/HeadSEO';

const Home = (): JSX.Element => (
  <>
    <HeadSEO title="Home" />
    <HomeContainer>
      <Introduction />
      <DashboardInfo />
      <Inspiration />
    </HomeContainer>
  </>
);

Home.Layout = Page;
export default Home;
