import { Col, Container, Row } from 'components/layout';
import Text from 'components/Text';
import DesktopDashboard from '../../../assets/desktop.png';

function DashboardInfo() {
  return (
    <Container
      css={{
        margin: '200px auto',
      }}
    >
      <Row>
        <Col sm={3} md={4} lg={6}>
          <Text
            as="h1"
            fontWeight="normal"
            css={{
              marginBottom: '10px',
              fontSize: '36px',
            }}
          >
            Use a modern dashboard to control your trip’s
          </Text>
          <Text as="p" color="#828282">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae
            libero nisi. Maecenas at nisi euismod, dapibus tortor at, porttitor
            metus. Duis consectetur pulvinar ipsum. In tellus nisl, rutrum eu
            sem ac, faucibus facilisis justo. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Quisque
            mollis leo quis lorem mollis blandit sit amet quis est. Nunc euismod
            augue leo, vitae viverra enim eleifend a. Duis enim enim, accumsan
            ut vulputate et, dictum ac lorem. Phasellus semper turpis in semper
            sollicitudin. Aenean hendrerit nulla non lorem tempor tincidunt.
            Nulla iaculis tortor eu ex consectetur, et malesuada metus suscipit.
          </Text>
        </Col>
        <Col sm={3} md={4} lg={6}>
          <img
            src={DesktopDashboard}
            style={{ width: '100%' }}
            alt="Dashboard example"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default DashboardInfo;
