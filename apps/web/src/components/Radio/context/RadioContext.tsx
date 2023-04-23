import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

interface IRadioGroupContext {
  handleRadioActive: (value: string) => void;
  radioActive: string | number;
}

interface IRadioGroupProviderProps {
  children: ReactNode;
}

const RadioGroupContext = createContext<IRadioGroupContext>(
  {} as IRadioGroupContext
);

export const RadioGroupProvider = ({ children }: IRadioGroupProviderProps) => {
  const [radioActive, setRadioActive] = useState<string | number>('');

  const handleRadioActive = useCallback((value: string) => {
    setRadioActive(value);
  }, []);

  return (
    <RadioGroupContext.Provider value={{ radioActive, handleRadioActive }}>
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
