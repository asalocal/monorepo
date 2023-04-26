import Head from 'next/head';
import { HomeContainer } from '../styles/Home.styles';
import Page from '../components/Page';
import HeadSEO from '../components/HeadSEO';
import Introduction from '../components/Home/Introduction';
import Inspiration from '../components/Home/Inspiration';
import React from 'react';
import { Col, Container, Row } from 'components/layout';
import Text from 'components/Text';
import Bold from 'components/Bold';

export default function Home() {
  return (
    <HomeContainer>
      <HeadSEO title="Home" />
      <Introduction />
      <Container
        css={{
          marginTop: '120px',
        }}
      >
        <Row>
          <Col lg={6} alignItems="end" justifyContent="center">
            <Text
              fontWeight={500}
              as="h2"
              css={{
                fontSize: '28px',
              }}
            >
              Find the{' '}
              <Bold
                css={{
                  color: '$primary',
                }}
              >
                best itineraries
              </Bold>{' '}
              for <br />
              your trips
            </Text>
          </Col>
          <Col
            lg={6}
            css={{
              gap: '15px',
            }}
          >
            <Text color="$primary">+1000 itineraries</Text>
            <Text color="$primary">+20 guides to help you with your trip</Text>
            <Text color="$primary">+40 specialized locals</Text>
          </Col>
        </Row>
      </Container>
      <Inspiration />
    </HomeContainer>
  );
}

Home.Layout = Page;
