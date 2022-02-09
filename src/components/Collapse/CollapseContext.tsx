import { createContext, useCallback, useContext, useState } from 'react';

interface ICollapseContext {
  contentOpened: string[];
  handleCollapse: (value: string) => void;
  handleCollapseType: (value: 'special' | 'default') => void;
  handleDefaultValue: (value: string | string[]) => void;
  collapseType: 'special' | 'default';
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
  const [collapseIsMultiple, setCollapseIsMultiple] = useState(false);
  const [collapseType, setCollapseType] = useState<'special' | 'default'>(
    'default'
  );

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

  const handleCollapseType = useCallback((value: 'special' | 'default') => {
    setCollapseType(value);
  }, []);

  return (
    <CollapseContext.Provider
      value={{
        collapseType,
        handleDefaultValue,
        handleCollapseType,
        collapseIsMultiple,
        contentOpened,
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
