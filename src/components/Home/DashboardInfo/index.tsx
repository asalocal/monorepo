import { Col, Container, Row } from 'components/layout';

function DashboardInfo() {
  return (
    <Container
      css={{
        marginTop: '200px',
      }}
    >
      <Row>
        <Col sm={3} md={4} lg={9}>
          <h1>Use a modern dashboard to control your trip’s</h1>
          <p>
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
          </p>
        </Col>
        <Col sm={3} md={4} lg={2}>
          <h1>Teste Teste Teste Teste</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default DashboardInfo;
