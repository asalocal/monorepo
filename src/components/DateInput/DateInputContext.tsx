import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import getQuantityOfDays from 'utils/getQuantityOfDays';

interface IPositions {
  x: number;
  y: number;
}

interface IDays {
  day: number;
  month: number;
  UTCdate: number;
}
interface IDateInputContext {
  registerPositions: (positions: IPositions) => void;
  positions: IPositions;
  handleCalendar: (value?: boolean) => void;
  calendarOpen: boolean;
  handleDay: (day: number) => void;
  optionDay: number;
  days: IDays[];
  year: string;
  months: string[];
  value: DateInputValue;
  handleNextMonth: () => void;
  handlePrevMonth: () => void;
  currentMonth: number;
  monthValue: number;
  setCurrentMonth: React.Dispatch<React.SetStateAction<number>>;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  handleValue: (value: DateInputValue) => void;
  handleMonthValue: (data: { day: number; month: number }) => void;
}

interface DateInputProviderProps {
  children: React.ReactNode;
}

type IMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'July'
  | 'June'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

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
  const [monthValue, setMonthValue] = useState(0);
  const [year, setYear] = useState('');
  const [days, setDays] = useState<IDays[]>([]);

  const date = useMemo(() => new Date(), []);

  const handleNextMonth = useCallback(() => {
    setCurrentMonth((prevState) => {
      if (prevState === 11) {
        const date = new Date();

        date.setFullYear(Number(year) + 1);
        setYear(String(date.getFullYear()));
        return 0;
      }

      return prevState + 1;
    });
  }, [year]);

  const handlePrevMonth = useCallback(() => {
    setCurrentMonth((prevState) => {
      if (prevState === 0) {
        const date = new Date();

        date.setFullYear(Number(year) - 1);

        setYear(String(date.getFullYear()));
        return 11;
      }

      return prevState - 1;
    });
  }, [year]);

  const months = useMemo(
    (): IMonth[] => [
      'January',
      'February',
      'March',
      'April',
      'May',
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

  const getAllDaysInTheMonth = useCallback(() => {
    const date = new Date();
    date.setMonth(currentMonth);

    let value = 0;

    const quantityOfDays = getQuantityOfDays(currentMonth, Number(year));

    const days = [...Array(quantityOfDays)].map((_, i) => {
      value = i + 1;
      date.setDate(value);

      if (date.getMonth() === 1) {
        if (date.getDate() > 28) {
          value = 0 + 1;

          date.setMonth(2, value);

          return {
            day: date.getDate(),
            month: date.getMonth(),
            UTCdate: date.getDay(),
          };
        }
      }

      return {
        day: date.getDate(),
        month: date.getMonth(),
        UTCdate: date.getDay(),
      };
    });

    setDays(days);
  }, [currentMonth, year]);

  const handleDay = useCallback(
    (day: number) => {
      if (!day) {
        return;
      }

      const date = new Date();

      date.setMonth(currentMonth);

      setOptionDay(day);
      const formattedDay = day < 10 ? `0${day}` : day;

      const monthFormatted =
        date.getMonth() + 1 < 10
          ? `0${date.getMonth() + 1}`
          : date.getMonth() + 1;

      setValue((prevState) => ({
        ...prevState,
        day,
        formatted: `${formattedDay}/${monthFormatted}/${year}`,
      }));
    },
    [currentMonth, year]
  );

  const handleMonthValue = useCallback(
    ({ month, day }: { month: number; day: number }) => {
      setMonthValue(month);
      handleDay(day);
      const date = new Date();

      date.setDate(day);
      date.setMonth(month);

      setYear(String(date.getFullYear()));
      setCurrentMonth(date.getMonth());
    },
    [handleDay]
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

  useEffect(() => {
    getAllDaysInTheMonth();
  }, [getAllDaysInTheMonth]);

  useEffect(() => {
    setCurrentMonth(date.getMonth());
  }, [date]);

  useEffect(() => {
    setYear(date.getFullYear().toString());
  }, [date]);

  return (
    <DateInputContext.Provider
      value={{
        handleNextMonth,
        handlePrevMonth,
        monthValue,
        setYear,
        year,
        days,
        handleValue,
        handleMonthValue,
        value,
        setCurrentMonth,
        currentMonth,
        months,
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
