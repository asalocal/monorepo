import { TrashIcon } from '@modulz/radix-icons';
import Button from '@kaiju-ui/button';
import Flex from 'components/Flex';
import Text from 'components/Text';
import { ICity, useSchedule } from 'context/ScheduleContext';
import { trips } from 'mocks/trips';
import { useEffect, useState } from 'react';
import { FiMapPin } from 'react-icons/fi';
import { ITrips } from 'types/Trips';

interface ICitiesListProps {
  handleRemoveCity: (name: string) => void;
}

function CitiesList({ handleRemoveCity }: ICitiesListProps) {
  const { schedule } = useSchedule();
  const [cities, setCities] = useState<ITrips[]>([]);

  useEffect(() => {
    if (schedule.cities.length > 0) {
      let cities: ITrips[] = [];

      schedule.cities.forEach((city: ICity) => {
        cities = [
          ...cities,
          ...trips.filter((trip: ITrips) => trip.name === city.name),
        ];
      });

      setCities(cities);
    }
  }, [schedule.cities]);
  return (
    <>
      <Flex direction="column" css={{ height: '100%' }}>
        {cities?.map((city) => (
          <Flex
            key={`${city.name}-${city.id}`}
            alignItems="center"
            justifyContent="spaceBetween"
            css={{
              border: '1px solid $gray6',
              padding: '10px',
              borderRadius: '10px',

              '& + &': {
                marginTop: '10px',
              },
            }}
          >
            <Flex direction="row">
              <Flex
                css={{
                  marginRight: '10px',

                  img: {
                    borderRadius: '10px',
                    width: '100px',
                    height: '100px',
                  },
                }}
              >
                <img src={city.thumbs[0]} />
              </Flex>
              <Flex direction="column" justifyContent="center">
                <Text as="h5">{city.name}</Text>
                <Text
                  as="p"
                  css={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '$gray10',
                    svg: {
                      marginRight: '5px',
                    },
                  }}
                >
                  <FiMapPin /> {city.subtitle}
                </Text>
              </Flex>
            </Flex>
            <Flex>
              <Button
                onClick={() => handleRemoveCity(city.name)}
                variant="ghost"
                css={{ width: 'fit-content', margin: '0' }}
              >
                <TrashIcon />
              </Button>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </>
  );
}

export default CitiesList;
