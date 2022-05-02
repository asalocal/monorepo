import { Form } from '@unform/web';
import Input from 'components/Input';
import { Col, Container, Row } from 'components/layout';
import Navbar from 'components/Navbar';
import { FiGrid, FiList } from 'react-icons/fi';
import { GetServerSideProps } from 'next';
import Text from 'components/Text';
import Flex from 'components/Flex';
import Button from 'components/Button';
import Collapse, { CollapseItem } from '@kaiju-ui/collapse';
import Checkbox from 'components/Checkbox';
import Head from 'next/head';
import City from 'components/Explore/City';
import { ITrips } from 'types/Trips';
import DateInput from 'components/DateInput';
import routesAPI from 'api/routesAPI';
import { useCallback, useEffect, useState } from 'react';
import CitySkeleton from 'components/Explore/CitySkeleton';
import { ViewButton } from 'styles/Explore.styles';
import SchedulePop from 'components/Schedule/Pop';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';
interface ExploreProps {
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
}: ExploreProps) {
  const [trips, setTrips] = useState<ITrips[]>([]);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState<'grid' | 'list'>('list');

  const getAllTrips = useCallback(async () => {
    setLoading(true);
    const { data } = await routesAPI.get('/trips');

    setTrips(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    getAllTrips();
  }, [getAllTrips]);

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
            <Col sm={12} md={12} lg={9}>
              <Form onSubmit={(data) => console.log}>
                <Flex
                  alignItems="center"
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
                  <Button
                    css={{
                      width: 'fit-content',
                      svg: {
                        fontSize: '15px',
                        margin: '0',
                        width: '65px',
                        height: '65px',
                      },
                    }}
                  >
                    <MagnifyingGlassIcon />
                  </Button>
                </Flex>
                <Flex alignItems="center" justifyContent="spaceBetween">
                  <Text
                    as="span"
                    css={{ color: '$gray8', display: 'flex', margin: '10px' }}
                  >
                    {trips.length} results
                  </Text>

                  <Flex>
                    <ViewButton
                      active={view === 'list'}
                      variant="ghost"
                      onClick={() => setView('list')}
                    >
                      <FiList />
                    </ViewButton>
                    <ViewButton
                      active={view === 'grid'}
                      onClick={() => setView('grid')}
                      variant="ghost"
                    >
                      <FiGrid />
                    </ViewButton>
                  </Flex>
                </Flex>
              </Form>

              <Row>
                {loading ? (
                  <Col sm={12} md={12} lg={12}>
                    <CitySkeleton />
                  </Col>
                ) : (
                  <Col sm={12} md={12} lg={12}>
                    <Container>
                      <Row>
                        {trips.map((trip) => {
                          return (
                            <City
                              view={view}
                              goingTo={goingTo}
                              key={trip.id}
                              trip={trip}
                            />
                          );
                        })}
                      </Row>
                    </Container>
                  </Col>
                )}
              </Row>
            </Col>
            <Col sm={12} md={12} lg={3}>
              <Collapse
                css={{ border: '1px solid #c1c1c1' }}
                collapseTitle="Filters"
                isMultiple
                isSpecial
                defaultValue="country"
              >
                <CollapseItem value="country" title="Country">
                  <Flex direction="column" css={{ padding: '10px' }}>
                    <Form onSubmit={(data) => console.log(data)}>
                      <Checkbox name="unitedStates">United States</Checkbox>
                      <Checkbox name="brasil">Brasil</Checkbox>
                      <Checkbox name="canada">Canada</Checkbox>
                      <Checkbox name="germany">Germany</Checkbox>
                    </Form>
                  </Flex>
                </CollapseItem>
                <CollapseItem value="type" title="Type">
                  <Flex direction="column" css={{ padding: '10px' }}>
                    <Form onSubmit={() => console.log('Submit')}>
                      <Checkbox name="type">Two Way Trip</Checkbox>
                      <Checkbox name="type">Three or more stops</Checkbox>
                    </Form>
                  </Flex>
                </CollapseItem>
                <CollapseItem value="kids" title="Kids">
                  <Flex direction="column" css={{ padding: '10px' }}>
                    <Form onSubmit={() => console.log('Submit')}>
                      <Checkbox name="kids">No kids</Checkbox>
                      <Checkbox name="kids">One kids</Checkbox>
                      <Checkbox name="kids">More than two kids</Checkbox>
                    </Form>
                  </Flex>
                </CollapseItem>
              </Collapse>
            </Col>
          </Row>
        </Container>
        <SchedulePop />
      </Container>
    </>
  );
}

export default Explore;
