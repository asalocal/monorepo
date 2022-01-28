import { Form } from '@unform/web';
import Input from 'components/Input';
import { Col, Container, Row } from 'components/layout';
import Navbar from 'components/Navbar';
import { FiGrid, FiList, FiMapPin } from 'react-icons/fi';
import { GetServerSideProps } from 'next';
import crypto from 'crypto';
import Text from 'components/Text';
import Flex from 'components/Flex';
import Button from 'components/Button';
import Collapse from 'components/Collapse/Collapse';
import CollapseItem from 'components/Collapse/CollapseItem';
import Checkbox from 'components/Checkbox';
import Head from 'next/head';
import DateInput from 'components/DateInput';
import City from 'components/Explore/City';

interface ITrips {
  id: string;
  name: string;
  subtitle: string;
  thumb: string;
  description: string;
  user: {
    name: string;
    avatar: string;
  };
}

interface ExploreProps {
  data: {
    trips: ITrips[];
  };
  filter: {
    goingTo: string;
    leavingFrom: string;
    departure: string;
    dateOfReturn: string;
    numberOfKids: string;
    numberOfPassangers: string;
  };
}

const trips = [
  {
    id: crypto.createHash('md5').update('1').digest('hex'),
    name: 'New York',
    subtitle: 'New York, USA',
    user: {
      name: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    thumb:
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed laoreet diam, vel dictum erat. Nam iaculis elit id massa convallis, sed malesuada erat sagittis. In in egestas diam. Quisque scelerisque, dolor eget sollicitudin aliquam, velit mi malesuada orci, id bibendum turpis metus volutpat diam. Cras tempus, urna a varius venenatis, nisi nunc molestie ex, nec fermentum sapien lectus in nisl. Etiam quis ligula est. Morbi vel ipsum sapien. Fusce a dui nunc. Cras sodales velit est, vel sollicitudin risus tincidunt eget. Cras pulvinar, augue ac pharetra semper, odio erat maximus erat, feugiat eleifend arcu dui id elit.',
  },
  {
    id: crypto.createHash('md5').update('5123123123').digest('hex'),
    name: 'Orlando',
    subtitle: 'Florida, USA',
    thumb:
      'https://images.unsplash.com/photo-1575089776834-8be34696ffb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    user: {
      name: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed laoreet diam, vel dictum erat. Nam iaculis elit id massa convallis, sed malesuada erat sagittis. In in egestas diam. Quisque scelerisque, dolor eget sollicitudin aliquam, velit mi malesuada orci, id bibendum turpis metus volutpat diam. Cras tempus, urna a varius venenatis, nisi nunc molestie ex, nec fermentum sapien lectus in nisl. Etiam quis ligula est. Morbi vel ipsum sapien. Fusce a dui nunc. Cras sodales velit est, vel sollicitudin risus tincidunt eget. Cras pulvinar, augue ac pharetra semper, odio erat maximus erat, feugiat eleifend arcu dui id elit.',
  },
  {
    id: crypto.createHash('md5').update('5134123123').digest('hex'),
    name: 'Orlando',
    subtitle: 'Florida, USA',
    thumb:
      'https://images.unsplash.com/photo-1575089776834-8be34696ffb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    user: {
      name: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed laoreet diam, vel dictum erat. Nam iaculis elit id massa convallis, sed malesuada erat sagittis. In in egestas diam. Quisque scelerisque, dolor eget sollicitudin aliquam, velit mi malesuada orci, id bibendum turpis metus volutpat diam. Cras tempus, urna a varius venenatis, nisi nunc molestie ex, nec fermentum sapien lectus in nisl. Etiam quis ligula est. Morbi vel ipsum sapien. Fusce a dui nunc. Cras sodales velit est, vel sollicitudin risus tincidunt eget. Cras pulvinar, augue ac pharetra semper, odio erat maximus erat, feugiat eleifend arcu dui id elit.',
  },
  {
    id: crypto.createHash('md5').update('1432341312').digest('hex'),
    name: 'Orlando',
    subtitle: 'Florida, USA',
    thumb:
      'https://images.unsplash.com/photo-1575089776834-8be34696ffb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    user: {
      name: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed laoreet diam, vel dictum erat. Nam iaculis elit id massa convallis, sed malesuada erat sagittis. In in egestas diam. Quisque scelerisque, dolor eget sollicitudin aliquam, velit mi malesuada orci, id bibendum turpis metus volutpat diam. Cras tempus, urna a varius venenatis, nisi nunc molestie ex, nec fermentum sapien lectus in nisl. Etiam quis ligula est. Morbi vel ipsum sapien. Fusce a dui nunc. Cras sodales velit est, vel sollicitudin risus tincidunt eget. Cras pulvinar, augue ac pharetra semper, odio erat maximus erat, feugiat eleifend arcu dui id elit.',
  },
  {
    id: crypto.createHash('md5').update('1231231313').digest('hex'),
    name: 'Orlando',
    subtitle: 'Florida, USA',
    thumb:
      'https://images.unsplash.com/photo-1575089776834-8be34696ffb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    user: {
      name: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
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
      dateOfReturn,
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
        dateOfReturn,
        numberOfPassengers,
        goingTo,
        numberOfKids,
      },
    },
  };
};

function Explore({
  filter: { goingTo, leavingFrom, dateOfReturn, departure },
  data: { trips },
}: ExploreProps) {
  return (
    <>
      <Head>
        <title>{goingTo} - Explore</title>
      </Head>
      <Container fullWidth>
        <Row>
          <Navbar staticMenu />
        </Row>
        <Container>
          <Row css={{ marginTop: '130px' }}>
            <Col sm={12} md={6} lg={8}>
              <Form onSubmit={(data) => console.log}>
                <Flex
                  css={{
                    [`div + div`]: {
                      margin: '0 10px',
                    },
                  }}
                >
                  <DateInput label="Teste" id="test" name="test" />
                  <Input
                    type="text"
                    name="leavingFrom"
                    label="Leaving from"
                    defaultValue={leavingFrom}
                  />
                  <Input
                    type="text"
                    name="goingTo"
                    label="Going to"
                    defaultValue={goingTo}
                  />
                  <Input
                    type="text"
                    name="departure"
                    label="Departure"
                    defaultValue={departure}
                  />
                  <Input
                    type="text"
                    name="dateOfReturn"
                    label="Date of Return"
                    defaultValue={dateOfReturn}
                  />
                </Flex>
                <Flex alignItems="center" justifyContent="spaceBetween">
                  <Text
                    as="span"
                    css={{ color: '$gray8', display: 'flex', margin: '10px' }}
                  >
                    {trips.length} results
                  </Text>

                  <Flex>
                    <Button
                      css={{
                        opacity: 0.5,

                        svg: {
                          margin: 0,
                        },

                        '&:hover': {
                          opacity: 1,
                          boxShadow: '0 0 10px 2px rgba(255, 103, 56, 0.2)',
                        },
                      }}
                      variant="ghost"
                    >
                      <FiList />
                    </Button>
                    <Button
                      css={{
                        opacity: 0.5,
                        svg: {
                          margin: 0,
                        },

                        '&:hover': {
                          opacity: 1,
                          boxShadow: '0 0 10px 2px rgba(255, 103, 56, 0.2)',
                        },
                      }}
                      variant="ghost"
                    >
                      <FiGrid />
                    </Button>
                  </Flex>
                </Flex>
              </Form>

              <Row>
                <Col sm={12} md={12} lg={12}>
                  {trips.map((trip) => (
                    <City key={trip.id} trip={trip} />
                  ))}
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <Collapse collapseTitle="Filters" defaultValue="country">
                <CollapseItem value="country" title="Country">
                  <Form onSubmit={() => console.log('Submit')}>
                    <Checkbox name="country">United States</Checkbox>
                    <Checkbox name="country">Brasil</Checkbox>
                    <Checkbox name="country">Canada</Checkbox>
                    <Checkbox name="country">Germany</Checkbox>
                  </Form>
                </CollapseItem>
                <CollapseItem value="type" title="Type">
                  <Form onSubmit={() => console.log('Submit')}>
                    <Checkbox name="type">Two Way Trip</Checkbox>
                    <Checkbox name="type">Three or more stops</Checkbox>
                  </Form>
                </CollapseItem>
                <CollapseItem value="kids" title="Kids">
                  <Form onSubmit={() => console.log('Submit')}>
                    <Checkbox name="kids">No kids</Checkbox>
                    <Checkbox name="kids">One kids</Checkbox>
                    <Checkbox name="kids">More than two kids</Checkbox>
                  </Form>
                </CollapseItem>
              </Collapse>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Explore;
