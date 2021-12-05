import DashboardInfo from 'components/Home/DashboardInfo';
import Introduction from 'components/Home/Introduction';
import { HomeContainer } from './Home/styles';

const Home = (): JSX.Element => {
  return (
    <HomeContainer>
      <Introduction />
      <DashboardInfo />
    </HomeContainer>
  );
};

export default Home;
