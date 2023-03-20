import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import generateHash from 'utils/generateHash';
import { useToast } from './ToastContext';
import routesAPI from '../api/routesAPI';
import { ITrips } from 'types/Trips';
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

      if (!name) {
        addToast({
          title: 'Schedule name is required',
          message: 'Please enter a name for your schedule',
          type: 'error',
        });
        return;
      }

      const newSchedule = {
        id: generateHash(),
        name,
        departure,
        dateOfReturn,
        cities: [city],
      };

      localStorage.setItem('schedule', JSON.stringify(newSchedule));

      addToast({
        title: 'Trip created with success',
        message: 'Now you can add more cities to your trip',
        type: 'success',
      });

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
