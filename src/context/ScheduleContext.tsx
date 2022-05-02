import Text from 'components/Text';
import Flex from 'components/Flex';
import { FiMapPin } from 'react-icons/fi';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import generateHash from 'utils/generateHash';
import { useToast } from './ToastContext';
import { setCookie, parseCookies } from 'nookies';
import SchedulePop from 'components/Schedule/Pop';
import routesAPI from '../api/routesAPI';
import { ITrips } from 'types/Trips';
import { createObjectStore, updateDataObject } from 'database/indexdb';
export interface ICity {
  id: string;
  name: string;
  location: string;
}

interface ICreateSchedule {
  dateOfReturn: string;
  departure: string;
  city: ICity;
  name: string;
}

interface IAddCity {
  city: Omit<ICity, 'id'>;
}
interface ISchedule {
  id: string;
  name: string;
  cities: ICity[];
  departure: string;
  dateOfReturn: string;
}
interface IScheduleContext {
  schedule: ISchedule;
  addCity: (city: IAddCity) => void;
  deleteSchedule: () => void;
  removeCity: (name: string) => void;
  createSchedule: (schedule: ICreateSchedule) => void;
}

interface ScheduleProviderProps {
  children: React.ReactNode;
}

const ScheduleContext = createContext<IScheduleContext>({} as IScheduleContext);

export const ScheduleProvider = ({ children }: ScheduleProviderProps) => {
  const [schedule, setSchedule] = useState<ISchedule>({} as ISchedule);

  const { addToast } = useToast();

  const deleteSchedule = useCallback(async () => {
    setSchedule({} as ISchedule);

    localStorage.removeItem('schedule');

    addToast({
      type: 'success',
      title: 'Schedule deleted',
      message: 'Your schedule has been deleted',
    });
  }, [addToast]);

  const removeCity = useCallback(
    (name: string) => {
      const findCity = schedule.cities.find((city) => city.name === name);

      if (!findCity) {
        throw new Error('City not found');
      }

      const newCities = schedule.cities.filter((city) => city.name !== name);

      const newSchedule = {
        ...schedule,
        cities: newCities,
      };

      updateDataObject({
        database: {
          name: 'schedule',
          version: 2,
        },
        data: newSchedule,
        objectStore: {
          name: 'schedule',
        },
      });

      localStorage.setItem('schedule', JSON.stringify(newSchedule));

      setSchedule(newSchedule);

      addToast({
        type: 'success',
        title: 'City removed',
        position: 'bottom',
        message: `${name} removed from your schedule`,
      });
    },
    [schedule]
  );

  const createSchedule = useCallback(
    async ({ departure, dateOfReturn, name, city }: ICreateSchedule) => {
      const { data } = await routesAPI.get<ITrips[]>('/trips');

      const newSchedule = {
        id: generateHash(),
        name,
        departure,
        dateOfReturn,
        cities: [city],
      };

      createObjectStore({
        database: {
          name: 'schedule',
          version: 2,
        },
        store: [
          {
            name: 'cities',
            keyPath: 'cities',
            isUnique: false,
          },
          {
            name: 'dateOfReturn',
            keyPath: 'dateOfReturn',
            isUnique: false,
          },
          {
            name: 'departure',
            keyPath: 'departure',
            isUnique: false,
          },
          {
            name: 'name',
            keyPath: 'name',
            isUnique: false,
          },
          {
            name: 'id',
            keyPath: 'id',
            isUnique: true,
          },
        ],
        objectStore: {
          name: 'schedule',
          keyPath: 'id',
        },
        data: newSchedule,
      });

      localStorage.setItem('schedule', JSON.stringify(newSchedule));

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

      updateDataObject({
        database: {
          name: 'schedule',
          version: 2,
        },
        data: addingCity,
        objectStore: {
          name: 'schedule',
        },
      });

      localStorage.setItem('schedule', JSON.stringify(addingCity));

      setSchedule(addingCity);

      addToast({
        type: 'success',
        title: 'City added',
        message: `${city.name} added to your schedule`,
      });
    },
    [schedule, addToast]
  );

  useEffect(() => {
    const schedule = localStorage.getItem('schedule');

    if (!schedule) {
      return;
    }

    setSchedule(JSON.parse(schedule));
  }, []);

  return (
    <>
      <ScheduleContext.Provider
        value={{
          deleteSchedule,
          schedule,
          removeCity,
          addCity,
          createSchedule,
        }}
      >
        {children}
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
