import { Form } from '@unform/web';
import Input from 'components/Input';
import { Col, Container, Row } from 'components/layout';
import Navbar from 'components/Navbar';
import { FiAlertTriangle, FiGrid, FiList } from 'react-icons/fi';
import { GetServerSideProps } from 'next';
import Text from 'components/Text';
import Flex from 'components/Flex';
import Button from 'components/Button';
import Collapse from 'components/Collapse/Collapse';
import CollapseItem from 'components/Collapse/CollapseItem';
import Checkbox from 'components/Checkbox';
import Head from 'next/head';
import City from 'components/Explore/City';
import { ITrips } from 'types/Trips';
import { trips } from 'mocks/trips';
import DateInput from 'components/DateInput';
import Tooltip from 'components/Tooltip';

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
                  <DateInput
                    type="text"
                    name="departure"
                    label="Departure"
                    defaultValue={departure}
                  />
                  <DateInput
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
