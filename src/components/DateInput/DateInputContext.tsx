import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import getMonth from 'utils/getMonth';

interface IPositions {
  x: number;
  y: number;
}

interface IDateInputContext {
  registerPositions: (positions: IPositions) => void;
  positions: IPositions;
  handleCalendar: (value?: boolean) => void;
  calendarOpen: boolean;
  handleDay: (day: number) => void;
  optionDay: number;
  year: string;
  month: string[];
  value: DateInputValue;
  currentMonth: number;
  setCurrentMonth: React.Dispatch<React.SetStateAction<number>>;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  handleValue: (value: DateInputValue) => void;
}

interface DateInputProviderProps {
  children: React.ReactNode;
}

export interface DateInputValue {
  formatted: string;
  day: number;
  month: string;
  year: string;
}

const DateInputContext = createContext<IDateInputContext>(
  {} as IDateInputContext
);

export const DateInputProvider = ({ children }: DateInputProviderProps) => {
  const [positions, setPositions] = useState<IPositions>({} as IPositions);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [optionDay, setOptionDay] = useState(1);
  const [value, setValue] = useState<DateInputValue>({} as DateInputValue);
  const [currentMonth, setCurrentMonth] = useState(0);
  const [year, setYear] = useState('');

  const month = useMemo(
    (): (
      | 'January'
      | 'February'
      | 'March'
      | 'July'
      | 'June'
      | 'August'
      | 'September'
      | 'October'
      | 'November'
      | 'December'
    )[] => [
      'January',
      'February',
      'March',
      'July',
      'June',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    []
  );

  const handleValue = useCallback((value: DateInputValue) => {
    setValue(value);
  }, []);

  const handleDay = useCallback(
    (day: number) => {
      setOptionDay(day);
      const formattedDay = day < 10 ? `0${day}` : day;

      setValue((prevState) => ({
        ...prevState,
        day,
        formatted: `${formattedDay}/${getMonth(
          month[currentMonth + 1]
        )}/${year}`,
      }));
    },
    [month, currentMonth, year]
  );

  const handleCalendar = useCallback((value?: boolean) => {
    setCalendarOpen((prevState) => {
      if (value) {
        return value;
      }

      return !prevState;
    });
  }, []);

  const registerPositions = useCallback((positions: IPositions) => {
    setPositions((prevState) => ({
      ...prevState,
      x: positions.x,
      y: positions.y,
    }));
  }, []);

  return (
    <DateInputContext.Provider
      value={{
        setYear,
        year,
        handleValue,
        value,
        setCurrentMonth,
        currentMonth,
        month,
        handleDay,
        optionDay,
        registerPositions,
        handleCalendar,
        calendarOpen,
        positions,
      }}
    >
      {children}
    </DateInputContext.Provider>
  );
};

export const useDateInputContext = () => {
  const context = useContext(DateInputContext);

  if (!context) {
    throw new Error(
      'useDateInputContext must be used within a DateInputProvider'
    );
  }

  return context;
};
