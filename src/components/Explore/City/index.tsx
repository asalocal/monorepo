import Button from 'components/Button';
import Flex from 'components/Flex';
import Text from 'components/Text';
import { FiMapPin } from 'react-icons/fi';
import { ITrips } from 'types/Trips';
import Gallery from 'components/Gallery';
import TripUser from './TripUser';
interface CityProps {
  trip: ITrips;
  view?: 'grid' | 'list';
}

function City({ trip, view = 'list' }: CityProps) {
  return (
    <>
      <Flex
        key={`${Date.now()}-${trip.id}`}
        direction={view === 'list' ? 'row' : 'column'}
        css={{
          maxWidth: `${view === 'list' ? '100%' : '280px'}`,
          padding: '15px',
          marginLeft: view === 'grid' ? '4px' : 0,
        }}
      >
        <Gallery orientation="vertical" thumbs={trip.thumbs} />
        <Flex
          direction="column"
          css={{
            margin: view === 'grid' ? '10px 0 ' : '0 15px',
          }}
        >
          <Text as="h2">{trip.name}</Text>
          <Flex direction={view === 'grid' ? 'column' : 'row'}>
            <Text
              as="span"
              css={{
                color: '$gray11',
                display: 'flex',
                alignItems: 'center',
                opacity: 0.5,

                svg: {
                  marginRight: '10px',
                },
              }}
            >
              <FiMapPin /> {trip.subtitle}
            </Text>
            <Flex
              alignItems="center"
              css={{
                marginLeft: view === 'grid' ? '0' : '10px',
                img: {
                  height: '20px',
                  width: '20px',
                  borderRadius: '10px',
                  objectFit: 'cover',
                  margin: 0,
                  marginRight: '10px',
                },
              }}
            >
              <TripUser user={trip.user} />
            </Flex>
          </Flex>

          <Text
            as="p"
            css={{
              marginTop: '10px',
              width: '100%',
              height: '80px',
              letterSpacing: '-0.5px',
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

                width: '200px',
              }}
            >
              See more details
            </Button>
            <Button css={{ width: '200px' }}>Add to the schedule</Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default City;
