import Button from 'components/Button';
import { Col, Container, Row } from 'components/layout';
import Text from 'components/Text';
import Image from 'next/image';

function DashboardInfo() {
  return (
    <Container
      css={{
        marginTop: '200px',
        marginBottom: '100px',
      }}
    >
      <Row css={{ justifyContent: 'center' }}>
        <Col sm={12} md={5} lg={6}>
          <Text
            as="h1"
            css={{
              color: '$gray12',
              margin: '30px 0 20px 0',
              fontSize: '32px',
            }}
          >
            Use a modern dashboard to <br /> control your trip’s
          </Text>
          <Text
            as="p"
            css={{
              color: '$gray9',
            }}
          >
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
        <Col sm={12} md={5} lg={6}>
          <Image
            width="600px"
            height="450px"
            src="/assets/desktop.png"
            alt="Dashboard example"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default DashboardInfo;
