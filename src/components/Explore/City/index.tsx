import Button from 'components/Button';
import Flex from 'components/Flex';
import Text from 'components/Text';
import { FiMapPin } from 'react-icons/fi';
import { ITrips } from 'types/Trips';

interface CityProps {
  trip: ITrips;
}

function City({ trip }: CityProps) {
  return (
    <>
      <Flex
        key={`${Date.now()}-${trip.id}`}
        css={{
          marginTop: '20px',
          padding: '10px 5px',
          img: {
            borderRadius: '10px',
            height: '200px',
            width: '200px',
            objectFit: 'cover',
            marginRight: '20px',
          },
        }}
      >
        <img src={trip.thumb} alt={trip.name} />
        <Flex direction="column">
          <Text as="h2">{trip.name}</Text>
          <Flex>
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
                marginLeft: '40px',
                img: {
                  height: '20px',
                  width: '20px',
                  margin: 0,
                  marginRight: '10px',
                },
              }}
            >
              <img src={trip.user.avatar} alt={trip.user.name} />
              <Text as="span" css={{ color: '$gray11', opacity: 0.5 }}>
                {trip.user.name}
              </Text>
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
