import { createContext, ReactNode, useContext, useState } from 'react';

interface IRadioGroupContext {
  fields: Fields[];
  setFields: React.Dispatch<React.SetStateAction<Fields[]>>;
}

interface IRadioGroupProviderProps {
  children: ReactNode;
}

export interface Fields {
  value: any;
  name: string;
  id: string;
}

const RadioGroupContext = createContext<IRadioGroupContext>(
  {} as IRadioGroupContext
);

export const RadioGroupProvider = ({ children }: IRadioGroupProviderProps) => {
  const [fields, setFields] = useState<Fields[]>([]);

  return (
    <RadioGroupContext.Provider value={{ fields, setFields }}>
      {children}
    </RadioGroupContext.Provider>
  );
};

export const useRadioGroup = () => {
  const context = useContext(RadioGroupContext);

  if (!context) {
    throw new Error('useRadioGroup must be used within a RadioGroupProvider');
  }

  return context;
};
