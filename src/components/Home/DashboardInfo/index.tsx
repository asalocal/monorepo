import Button from 'components/Button';
import { Col, Container, Row } from 'components/layout';
import Text from 'components/Text';

function DashboardInfo() {
  return (
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
            libero nisi. Maecenas at nisi euismod, dapibus tortor at, porttitor
            metus. Duis consectetur pulvinar ipsum. In tellus nisl, rutrum eu
            sem ac, faucibus facilisis justo. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Quisque
            mollis leo quis lorem mollis blandit sit amet quis est. Nunc euismod
            augue leo, vitae viverra enim eleifend a.
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
  );
}

export default DashboardInfo;
