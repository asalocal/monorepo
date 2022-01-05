import Button from 'components/Button';
import Flex from 'components/Flex';
import { Col, Container, Row } from 'components/layout';
import Text from 'components/Text';
import Grid, { GridItem } from 'components/Grid';

function Inspiration() {
  return (
    <>
      <Grid
        css={{
          marginTop: '3rem',
          marginBottom: '3rem',
        }}
        columnGap="30px"
        rowGap="30px"
        columns="repeat(4, 1fr)"
        rows="repeat(4, 1fr)"
      >
        <GridItem
          css={{
            padding: '50px',
            backgroundImage: 'url(/assets/plants.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '10px',
            boxShadow: '0 0 10px 2px rgba(0,0,0, 0.5)',
            position: 'relative',
            minHeight: '500px',
            height: '100%',
            zIndex: 1,

            '&::before': {
              content: '',
              position: 'absolute',
              top: 0,
              zIndex: -1,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0,0,0, 0.2)',
              borderRadius: '10px',
            },
          }}
          area="1 / 1 / 3 / 5"
        >
          <Flex
            direction="column"
            justifyContent="spaceBetween"
            css={{
              height: '100%',
              minHeight: '500px',
              width: '100%',
              zIndex: 1,
            }}
          >
            <Text
              as="h1"
              fontWeight={400}
              css={{ fontSize: '45px', color: '$gray1' }}
            >
              Be inspired <br /> <Text as="strong">every day</Text>
            </Text>

            <Button
              variant="alternative"
              css={{
                width: 'fit-content',
                padding: '15px 25px',
                fontWeight: '400',
                fontSize: '18px',
                marginTop: '50px',
              }}
            >
              See the best trips
            </Button>
          </Flex>
        </GridItem>
        <GridItem
          css={{
            padding: '50px',
            backgroundImage: 'url(/assets/city.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '10px',
            boxShadow: '0 0 10px 2px rgba(0,0,0, 0.5)',
            position: 'relative',
            minHeight: '500px',
            height: '100%',
            zIndex: 1,
            '&::before': {
              content: '',
              position: 'absolute',
              top: 0,
              zIndex: -1,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0,0,0, 0.2)',
              borderRadius: '10px',
            },
          }}
          area="3 / 1 / 5 / 3"
        >
          <Flex
            direction="column"
            justifyContent="spaceBetween"
            css={{
              height: '100%',
              minHeight: '500px',
              width: '100%',
              zIndex: 1,
            }}
          >
            <Text
              as="h1"
              fontWeight={400}
              css={{ fontSize: '45px', color: '$gray1' }}
            >
              Be healthy, <br /> <Text as="strong">dream!</Text>
            </Text>

            <Button
              variant="alternative"
              css={{
                width: 'fit-content',
                padding: '15px 25px',
                fontWeight: '400',
                fontSize: '18px',
                marginTop: '50px',
              }}
            >
              Dream your trip
            </Button>
          </Flex>
        </GridItem>
        <GridItem
          css={{
            padding: '50px',
            backgroundImage: 'url(/assets/biker.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '10px',
            boxShadow: '0 0 10px 2px rgba(0,0,0, 0.5)',
            position: 'relative',
            minHeight: '500px',
            height: '100%',
            zIndex: 1,

            '&::before': {
              content: '',
              position: 'absolute',
              top: 0,
              zIndex: -1,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0,0,0, 0.2)',
              borderRadius: '10px',
            },
          }}
          area="3 / 3 / 5 / 5"
        >
          <Flex
            direction="column"
            justifyContent="spaceBetween"
            css={{
              height: '100%',
              minHeight: '500px',
              width: '100%',
              zIndex: 1,
            }}
          >
            <Text
              as="h1"
              fontWeight={400}
              css={{ fontSize: '45px', color: '$gray1' }}
            >
              Dreaming <br /> <Text as="strong">it's vicious</Text>
            </Text>

            <Button
              variant="alternative"
              css={{
                width: 'fit-content',
                padding: '15px 25px',
                fontSize: '18px',
                fontWeight: '400',
                marginTop: '50px',
              }}
            >
              Create a dream trip
            </Button>
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
}

export default Inspiration;
