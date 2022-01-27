import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ICollapseContext {
  contentOpened: string[];
  handleCollapse: (value: string) => void;
  registerCollapse: (value: string) => void;
  handleDefaultValue: (value: string | string[]) => void;
  handleCollapseMultiple: (value: boolean) => void;
  collapseIsMultiple: boolean;
}

interface CollapseProviderProps {
  children: React.ReactNode;
}

export const CollapseContext = createContext<ICollapseContext>(
  {} as ICollapseContext
);

export const CollapseProvider = ({ children }: CollapseProviderProps) => {
  const [contentOpened, setContentOpened] = useState<string[]>([]);
  const [collapse, setCollapse] = useState<string[]>([]);
  const [collapseIsMultiple, setCollapseIsMultiple] = useState(false);

  const handleDefaultValue = useCallback((value: string | string[]) => {
    if (typeof value === 'string') {
      setContentOpened([value]);
      return;
    }

    setContentOpened(value);
    return;
  }, []);

  const handleCollapse = useCallback(
    (value: string) => {
      if (contentOpened.includes(value)) {
        const removedValue = contentOpened.filter((item) => item !== value);

        setContentOpened(removedValue);
        return;
      }

      setContentOpened((prevState) =>
        collapseIsMultiple ? [...prevState, value] : [value]
      );
    },
    [collapseIsMultiple, contentOpened]
  );

  const handleCollapseMultiple = useCallback((value: boolean) => {
    setCollapseIsMultiple(value);
  }, []);

  const registerCollapse = useCallback((value: string) => {
    setCollapse((prevState) => [...prevState, value]);
  }, []);

  return (
    <CollapseContext.Provider
      value={{
        handleDefaultValue,
        collapseIsMultiple,
        contentOpened,
        registerCollapse,
        handleCollapseMultiple,
        handleCollapse,
      }}
    >
      {children}
    </CollapseContext.Provider>
  );
};

export const useCollapse = (): ICollapseContext => {
  const context = useContext(CollapseContext);

  if (!context) {
    throw new Error('useCollapse must be used within a CollapseProvider');
  }

  return context;
};
