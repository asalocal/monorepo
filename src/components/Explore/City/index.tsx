import Button from 'components/Button';
import Flex from 'components/Flex';
import Text from 'components/Text';
import { FiMapPin } from 'react-icons/fi';
import { ITrips } from 'types/Trips';
import Gallery from 'components/Gallery';
import TripUser from './TripUser';
import { useSchedule } from 'context/ScheduleContext';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import Tooltip from 'components/Tooltip';

interface CityProps {
  trip: ITrips;
  view?: 'grid' | 'list';
}

function City({ trip, view = 'list' }: CityProps) {
  const { addCity, schedule, createSchedule } = useSchedule();
  const { query } = useRouter();

  const handleButtonClick = useCallback(() => {
    if (!schedule.id) {
      createSchedule({
        city: {
          name: trip.name,
          id: trip.id,
          location: trip.subtitle,
        },
        departure: String(query.departure),
        dateOfReturn: String(query.dateOfReturn),
      });

      return;
    } else {
      addCity({
        city: {
          name: trip.name,
          location: trip.subtitle,
        },
      });
    }
  }, [schedule]);

  return (
    <>
      <Flex
        key={`${Date.now()}-${trip.id}`}
        direction={view === 'list' ? 'row' : 'column'}
        css={{
          width: `${view === 'list' ? '100%' : '290px'}`,
          padding: '15px',
        }}
      >
        <Gallery
          thumbCSS={{
            width: view === 'list' ? '200px !important' : '260px !important',
            height: view === 'list' ? '200px !important' : '260px !important',
          }}
          slidesCSS={{
            width: view === 'list' ? '35px' : '40px !important',
            height: view === 'list' ? '35px' : '40px !important',
          }}
          orientation={view === 'list' ? 'vertical' : 'horizontal'}
          thumbs={trip.thumbs}
        />
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
            <Button onClick={handleButtonClick} css={{ width: '200px' }}>
              Add to the schedule
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default City;
