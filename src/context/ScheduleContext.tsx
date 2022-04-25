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

      localStorage.setItem('schedule', JSON.stringify(addingCity));

      setSchedule(addingCity);
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
          schedule,
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
