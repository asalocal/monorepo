import { createContext, useContext } from 'react';

interface ScheduleContextProps {}

interface ScheduleProviderProps {
  children: React.ReactNode;
}

const ScheduleContext = createContext<ScheduleContextProps>(
  {} as ScheduleContextProps
);

export const ScheduleProvider = ({ children }: ScheduleProviderProps) => {
  return (
    <>
      <ScheduleContext.Provider value={{}}>{children}</ScheduleContext.Provider>
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
