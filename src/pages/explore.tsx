import { Form } from '@unform/web';
import Input from 'components/Input';
import { Col, Container, Row } from 'components/layout';
import Navbar from 'components/Navbar';
import { GetServerSideProps } from 'next';
import crypto from 'crypto';
import Text from 'components/Text';
import Flex from 'components/Flex';
import Button from 'components/Button';
interface ITrips {
  id: string;
  name: string;
  subtitle: string;
  thumb: string;
  description: string;
}

interface ExploreProps {
  data: {
    trips: ITrips[];
  };
  filter: {
    goingTo: string;
    leavingFrom: string;
    departure: string;
    return: string;
    numberOfKids: string;
    numberOfPassangers: string;
  };
}

const trips = [
  {
    id: crypto.createHash('md5').digest('hex'),
    name: 'New York',
    subtitle: 'New York, USA',
    thumb:
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed laoreet diam, vel dictum erat. Nam iaculis elit id massa convallis, sed malesuada erat sagittis. In in egestas diam. Quisque scelerisque, dolor eget sollicitudin aliquam, velit mi malesuada orci, id bibendum turpis metus volutpat diam. Cras tempus, urna a varius venenatis, nisi nunc molestie ex, nec fermentum sapien lectus in nisl. Etiam quis ligula est. Morbi vel ipsum sapien. Fusce a dui nunc. Cras sodales velit est, vel sollicitudin risus tincidunt eget. Cras pulvinar, augue ac pharetra semper, odio erat maximus erat, feugiat eleifend arcu dui id elit.',
  },
  {
    id: crypto.createHash('md5').update('1').digest('hex'),
    name: 'Orlando',
    subtitle: 'Florida, USA',
    thumb:
      'https://images.unsplash.com/photo-1575089776834-8be34696ffb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed laoreet diam, vel dictum erat. Nam iaculis elit id massa convallis, sed malesuada erat sagittis. In in egestas diam. Quisque scelerisque, dolor eget sollicitudin aliquam, velit mi malesuada orci, id bibendum turpis metus volutpat diam. Cras tempus, urna a varius venenatis, nisi nunc molestie ex, nec fermentum sapien lectus in nisl. Etiam quis ligula est. Morbi vel ipsum sapien. Fusce a dui nunc. Cras sodales velit est, vel sollicitudin risus tincidunt eget. Cras pulvinar, augue ac pharetra semper, odio erat maximus erat, feugiat eleifend arcu dui id elit.',
  },
];

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: {
      leavingFrom,
      goingTo,
      departure,
      return: returnDate,
      numberOfKids,
      numberOfPassengers,
    },
  } = context;

  return {
    props: {
      data: {
        trips,
      },
      filter: {
        leavingFrom,
        departure,
        return: returnDate,
        numberOfPassengers,
        goingTo,
        numberOfKids,
      },
    },
  };
};

function Explore({ filter: { goingTo }, data: { trips } }: ExploreProps) {
  return (
    <Container fullWidth>
      <Row>
        <Navbar staticMenu />
      </Row>
      <Container>
        <Row css={{ marginTop: '130px' }}>
          <Col sm={12} md={6} lg={9}>
            <Form onSubmit={(data) => console.log}>
              <Input
                type="text"
                name="goingTo"
                label="Going to"
                defaultValue={goingTo}
              />
              <Text
                as="span"
                css={{ color: '$gray8', display: 'flex', margin: '10px' }}
              >
                {trips.length} results
              </Text>
            </Form>

            <Row>
              <Col sm={12} md={12} lg={12}>
                {trips.map((trip) => (
                  <Flex
                    key={trip.id}
                    css={{
                      marginTop: '20px',
                      padding: '10px 5px',
                      img: {
                        borderRadius: '10px',
                        height: '200px',
                        width: '250px',
                        objectFit: 'cover',
                        marginRight: '20px',
                      },
                    }}
                  >
                    <img src={trip.thumb} alt={trip.name} />
                    <Flex direction="column">
                      <Text as="h2">{trip.name}</Text>
                      <Text as="span" css={{ color: '$primary' }}>
                        {trip.subtitle}
                      </Text>

                      <Text
                        as="p"
                        css={{
                          marginTop: '10px',
                          width: '100%',
                          height: '80px',
                          overflow: 'hidden',
                          whiteSpace: 'pre-wrap',
                          textOverflow: ' [...]',
                          color: '$gray9',
                        }}
                      >
                        {trip.description}
                      </Text>

                      <Flex
                        alignItems="end"
                        justifyContent="end"
                        css={{ marginTop: '10px' }}
                      >
                        <Button
                          variant="alternative"
                          css={{
                            marginRight: '20px',
                            borderColor: '$primary !important',
                            color: '$primary !important',
                            '&:hover': {
                              backgroundColor: '$primaryHover !important',
                            },
                            width: '200px',
                          }}
                        >
                          See more details
                        </Button>
                        <Button css={{ width: '200px' }}>
                          See more details
                        </Button>
                      </Flex>
                    </Flex>
                  </Flex>
                ))}
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={6} lg={3} css={{ backgroundColor: 'green' }}>
            <h1>Explore form</h1>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Explore;
