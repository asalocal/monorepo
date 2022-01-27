import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

interface IPositions {
  x: number;
  y: number;
}

interface IDateInputContext {
  registerPositions: (positions: IPositions) => void;
  positions: IPositions;
  handleCalendar: (value?: boolean) => void;
  calendarOpen: boolean;
  handleFocus: (value?: boolean) => void;
  isFocused: boolean;
  handleDay: (day: number) => void;
  optionDay: number;
  month: string[];
}

interface DateInputProviderProps {
  children: React.ReactNode;
}

const DateInputContext = createContext<IDateInputContext>(
  {} as IDateInputContext
);

export const DateInputProvider = ({ children }: DateInputProviderProps) => {
  const [positions, setPositions] = useState<IPositions>({} as IPositions);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [optionDay, setOptionDay] = useState(0);

  const month = useMemo(
    () => [
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

  const handleDay = useCallback((day: number) => {
    setOptionDay(day);
  }, []);

  const handleFocus = useCallback((value?: boolean) => {
    setIsFocused((prevState) => {
      if (value) {
        return value;
      }

      return !prevState;
    });
  }, []);
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
        month,
        handleDay,
        optionDay,
        registerPositions,
        isFocused,
        handleCalendar,
        calendarOpen,
        handleFocus,
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
