import { TrashIcon } from '@modulz/radix-icons';
import Button from 'components/Button';
import Flex from 'components/Flex';
import Modal from 'components/Modal';
import Text from 'components/Text';
import { ICity, useSchedule } from 'context/ScheduleContext';
import { trips } from 'mocks/trips';
import { useEffect, useState } from 'react';
import { FiMapPin } from 'react-icons/fi';
import { ITrips } from 'types/Trips';

interface IScheduleListModalProps {
  open: boolean;
  onCloseModal: () => void;
}

function ScheduleListModal({ open, onCloseModal }: IScheduleListModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cities, setCities] = useState<ITrips[]>([]);

  const { schedule, removeCity, deleteSchedule } = useSchedule();

  const handleRemoveCity = (name: string) => {
    if (schedule.cities?.length === 1) {
      deleteSchedule();

      if (onCloseModal) {
        onCloseModal();
      }

      return;
    }

    removeCity(name);
  };

  const handleCleanSchedule = () => {
    if (onCloseModal) {
      onCloseModal();
    }

    deleteSchedule();
  };

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

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
      <Modal
        title={
          <>
            <Flex
              alignItems="center"
              css={{
                svg: {
                  marginRight: '10px',
                },
              }}
            >
              <FiMapPin />
              <Text>
                My Schedule / <Text as="strong">{schedule.name}</Text>
              </Text>
            </Flex>
          </>
        }
        isOpen={isOpen}
        position="right"
        onCloseModal={() => {
          setIsOpen(false);

          if (onCloseModal) {
            onCloseModal();
          }
        }}
      >
        <Flex
          direction="column"
          alignItems="spaceBetween"
          css={{ height: '100%' }}
        >
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

          <Button
            variant="alternative"
            onClick={handleCleanSchedule}
            css={{ marginBottom: '10px' }}
          >
            Clean Schedule
          </Button>
        </Flex>
      </Modal>
    </>
  );
}

export default ScheduleListModal;
