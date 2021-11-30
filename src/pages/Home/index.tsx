import DashboardInfo from 'components/Home/DashboardInfo';
import Introduction from 'components/Home/Introduction';
import { HomeContainer } from './styles';

const Home = (): JSX.Element => {
  return (
    <HomeContainer>
      <Introduction />
      <DashboardInfo />
    </HomeContainer>
  );
};

export default Home;
