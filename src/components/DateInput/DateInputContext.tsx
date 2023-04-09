import useReferences from 'hooks/useButtonReferences';
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
  year: number;
}

interface IValidationDate {
  day: number;
  month: number;
  year: number;
}

interface IDateInputContext {
  handleCalendar: () => void;
  calendarOpen: boolean;
  handleDay: (day: number, month?: number) => void;
  optionDay: number;
  elements: HTMLElement[];
  setElements: React.Dispatch<React.SetStateAction<any[]>>;
  days: IDays[];
  year: string;
  months: string[];
  value: DateInputValue;
  handleNextMonth: () => void;
  monthVisualization: number;
  handlePrevMonth: () => void;
  currentMonth: number;
  monthValue: number;
  validationDate: IValidationDate;
  handleValidationDate: (date: string) => void;
  setCurrentMonth: React.Dispatch<React.SetStateAction<number>>;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  handleValue: (value: DateInputValue) => void;
  handleDefaultValue: (value: DateInputValue) => void;
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
  month: number;
  year: string;
}

const DateInputContext = createContext<IDateInputContext>(
  {} as IDateInputContext
);

export const DateInputProvider = ({ children }: DateInputProviderProps) => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [elements, setElements] = useReferences();
  const [optionDay, setOptionDay] = useState(1);
  const [value, setValue] = useState<DateInputValue>({} as DateInputValue);
  const [monthVisualization, setMonthVisualization] = useState(0);
  const [currentMonth, setCurrentMonth] = useState(0);
  const [monthValue, setMonthValue] = useState(0);
  const [defaultValue, setDefaultValue] = useState<DateInputValue>(
    {} as DateInputValue
  );
  const [year, setYear] = useState('');
  const [days, setDays] = useState<IDays[]>([]);
  const [validationDate, setValidationDate] = useState<IValidationDate>(
    {} as IValidationDate
  );

  const handleValidationDate = useCallback((date: string) => {
    const dateSplitted = date.split('/');

    const day = Number(dateSplitted[0]);
    const month = Number(dateSplitted[1]);
    const year = Number(dateSplitted[2]);

    setValidationDate({
      day,
      month,
      year,
    });
  }, []);

  const handleNextMonth = useCallback(() => {
    setMonthVisualization((prevState) => {
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
    setMonthVisualization((prevState) => {
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

  const handleDefaultValue = useCallback((value: DateInputValue) => {
    setValue(value);
    setDefaultValue(value);
  }, []);

  const getAllDaysInTheMonth = useCallback(() => {
    const date = new Date();
    date.setMonth(monthVisualization);

    let increment = 0;

    let monthToGet = monthVisualization;

    if (defaultValue.month && defaultValue.month !== monthVisualization + 1) {
      monthToGet = defaultValue.month;
    }

    const quantityOfDays = getQuantityOfDays(monthToGet, Number(year));

    const days = [...Array(quantityOfDays)].map((_, i) => {
      increment = i + 1;
      date.setDate(increment);

      if (date.getMonth() === 1) {
        if (date.getDate() > 28) {
          increment = 0 + 1;

          date.setMonth(2, increment);

          return {
            day: date.getDate(),
            month: date.getMonth(),
            UTCdate: date.getDay(),
            year: date.getFullYear(),
          };
        }
      }

      return {
        day: date.getDate(),
        month: date.getMonth(),
        UTCdate: date.getDay(),
        year: date.getFullYear(),
      };
    });

    setDays(days);
  }, [monthVisualization, defaultValue, year]);

  const handleDay = useCallback(
    (day: number, month?: number) => {
      const date = new Date();

      if (month) {
        date.setMonth(month || currentMonth);
      }

      setOptionDay(day);
      const formattedDay = day < 10 ? `0${day}` : day;

      const monthFormatted =
        date.getMonth() + 1 < 10
          ? `0${date.getMonth() + 1}`
          : date.getMonth() + 1;

      setValue((prevState) => ({
        ...prevState,
        day,
        month: date.getMonth() + 1,
        year: String(date.getFullYear()),
        formatted: `${formattedDay}/${monthFormatted}/${year}`,
      }));
    },
    [currentMonth, year]
  );

  const handleMonthValue = useCallback(
    ({ month, day }: { month: number; day: number }) => {
      setMonthValue(month);
      handleDay(day, month);
      const date = new Date();

      date.setDate(day);
      date.setMonth(month);

      setYear(String(date.getFullYear()));
      setCurrentMonth(date.getMonth());
    },
    [handleDay]
  );

  const handleCalendar = useCallback(() => {
    setCalendarOpen((prevState) => !prevState);
  }, []);

  useEffect(() => {
    getAllDaysInTheMonth();
  }, [getAllDaysInTheMonth]);

  useEffect(() => {
    const date = new Date();
    setMonthVisualization(date.getMonth());
    setCurrentMonth(date.getMonth());
  }, []);

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear().toString());
  }, []);

  return (
    <DateInputContext.Provider
      value={{
        elements,
        setElements,
        validationDate,
        handleNextMonth,
        handlePrevMonth,
        monthValue,
        handleValidationDate,
        monthVisualization,
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
        handleCalendar,
        calendarOpen,
        handleDefaultValue,
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
