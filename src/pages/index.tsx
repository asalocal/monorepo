import Explorer from 'components/Explorer';
import Navbar from 'components/Navbar';
import Button from 'components/Button';
import { Col, Container, Row } from 'components/layout';
import Text from 'components/Text';

import {
  HomeContainer,
  IntroductionContainer,
  TitleContainer,
  IntroductionContent,
} from '../styles/Home.styles';

const Home = (): JSX.Element => {
  return (
    <HomeContainer>
      <IntroductionContainer>
        <IntroductionContent>
          <Navbar orientation="horizontal" backgroundColor="transparent" />
          <TitleContainer>
            <h1>
              It’s your time to build <br />
              <strong>your dreams</strong>
            </h1>
            <h5>
              We give you the possibility to build your dream in a few minutes
            </h5>
          </TitleContainer>
          <Explorer />
        </IntroductionContent>
      </IntroductionContainer>
      <Container
        css={{
          marginTop: '200px',
          marginBottom: '100px',
        }}
      >
        <Row>
          <Col sm={3} md={4} lg={6}>
            <Text
              as="h1"
              fontWeight="normal"
              css={{
                margin: '30px 0 20px 0',
                fontSize: '32px',
              }}
            >
              Use a modern dashboard to <br /> control your trip’s
            </Text>
            <Text as="p" color="#a0a0a0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae
              libero nisi. Maecenas at nisi euismod, dapibus tortor at,
              porttitor metus. Duis consectetur pulvinar ipsum. In tellus nisl,
              rutrum eu sem ac, faucibus facilisis justo. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Quisque mollis leo quis lorem mollis blandit sit amet
              quis est. Nunc euismod augue leo, vitae viverra enim eleifend a.
            </Text>
            <Button css={{ marginTop: 30, maxWidth: '260px', width: '100%' }}>
              See the dashboard
            </Button>
          </Col>
          <Col sm={3} md={4} lg={6}>
            <img
              src="/assets/desktop.png"
              style={{ width: '100%' }}
              alt="Dashboard example"
            />
          </Col>
        </Row>
      </Container>
    </HomeContainer>
  );
};

export default Home;
