import Text from 'components/Text';
import Flex from 'components/Flex';
import { FiMapPin } from 'react-icons/fi';
import { createContext, useCallback, useContext, useState } from 'react';
import generateHash from 'utils/generateHash';
import { useToast } from './ToastContext';

interface ICity {
  id: string;
  name: string;
  location: string;
}

interface ICreateSchedule {
  dateOfReturn: string;
  departure: string;
  city: ICity;
}

interface IAddCity {
  city: Omit<ICity, 'id'>;
}
interface ISchedule {
  id: string;
  cities: ICity[];
  departure: string;
  dateOfReturn: string;
}
interface IScheduleContext {
  schedule: ISchedule;
  addCity: (city: IAddCity) => void;
  createSchedule: (schedule: ICreateSchedule) => void;
}

interface ScheduleProviderProps {
  children: React.ReactNode;
}

const ScheduleContext = createContext<IScheduleContext>({} as IScheduleContext);

export const ScheduleProvider = ({ children }: ScheduleProviderProps) => {
  const [schedule, setSchedule] = useState<ISchedule>({} as ISchedule);

  const { addToast } = useToast();

  const createSchedule = useCallback(
    ({ departure, dateOfReturn, city }: ICreateSchedule) => {
      const newSchedule = {
        id: generateHash(),
        departure,
        dateOfReturn,
        cities: [city],
      };

      setSchedule(newSchedule);
    },
    []
  );

  const addCity = useCallback(
    ({ city }: IAddCity) => {
      const findCity = schedule.cities.find(({ name }) => name === city.name);

      if (findCity) {
        addToast({
          type: 'error',
          title: 'Error on adding city to the schedule',
          message: "You can't add the same city twice",
        });
        return;
      }

      const addingCity = {
        ...schedule,
        cities: [...schedule.cities, { ...city, id: generateHash() }],
      };

      console.log('Adding city', addingCity);

      setSchedule(addingCity);
    },
    [schedule, addToast]
  );
  return (
    <>
      <ScheduleContext.Provider
        value={{
          schedule,
          addCity,
          createSchedule,
        }}
      >
        {children}
        {schedule.cities && (
          <Flex
            alignItems="center"
            justifyContent="spaceBetween"
            css={{
              backgroundColor: '$gray1',
              boxShadow: '0 0 5px 5px rgba(0,0,0, 0.2)',
              position: 'fixed',
              bottom: '10px',
              right: '10px',
              maxWidth: '400px',
              width: '100%',
              padding: '15px',
              borderRadius: '5px',
            }}
          >
            <Flex direction="column">
              <Text as="h5" css={{ color: '$text' }}>
                🛬 You're planning to go to {schedule.cities[0].location}
              </Text>

              <Text
                as="p"
                css={{
                  fontSize: '12px',
                  marginTop: '5px',
                  color: '$textAlternative',
                }}
              >
                Your current trip includes {schedule.cities.length}{' '}
                {schedule.cities.length > 1 ? 'cities' : 'city'}
              </Text>

              <Flex css={{ marginTop: '15px', color: '$text' }}>
                {schedule.cities.map(({ name }, index) => {
                  if (index === schedule.cities.length - 1) {
                    return (
                      <>
                        <Text
                          as="h4"
                          css={{
                            '& + &': {
                              marginLeft: '5px',
                            },
                          }}
                        >
                          {name}
                        </Text>
                      </>
                    );
                  }
                  return (
                    <>
                      <Text
                        as="h4"
                        css={{
                          '& + &': {
                            marginLeft: '5px',
                          },
                        }}
                      >
                        {name},
                      </Text>
                    </>
                  );
                })}
              </Flex>
            </Flex>
            <Flex
              css={{
                svg: {
                  fontSize: '30px',
                  marginRight: '15px',
                },
              }}
            >
              <FiMapPin />
              <Flex
                alignItems="center"
                justifyContent="center"
                css={{
                  position: 'absolute',
                  width: '25px',
                  height: '25px',
                  marginTop: -10,
                  marginLeft: '-10px',
                  borderRadius: '50%',
                  backgroundColor: 'red',
                  color: '$gray1',
                }}
              >
                {schedule.cities.length}
              </Flex>
            </Flex>
          </Flex>
        )}
      </ScheduleContext.Provider>
    </>
  );
};

export const useSchedule = () => {
  const context = useContext(ScheduleContext);

  if (!context) {
    throw new Error('useSchedule must be used within a ScheduleProvider');
  }

  return context;
};
