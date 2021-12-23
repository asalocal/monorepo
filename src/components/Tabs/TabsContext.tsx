import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

interface TabsProviderProps {
  children: React.ReactNode;
}
interface ITabsContext {
  addTrigger: (trigger: ITrigger) => void;
  handleTabChange: (value: string) => void;
  defaultTab: (value: string) => void;
  activeTab: string;
  orientation: 'horizontal' | 'vertical';
  handleOrientation: (orientation: 'horizontal' | 'vertical') => void;
}

interface ITrigger {
  id: string;
  value: string;
}

const TabsContext = createContext<ITabsContext>({} as ITabsContext);

export const TabsProvider = ({ children }: TabsProviderProps) => {
  const [trigger, setTrigger] = useState<ITrigger[]>([]);
  const [activeTab, setActiveTab] = useState('');
  const [orientation, setOrientation] = useState<'horizontal' | 'vertical'>(
    'horizontal'
  );

  const addTrigger = useCallback(({ id, value }: ITrigger) => {
    setTrigger((prevState) => [...prevState, { id, value }]);
  }, []);

  const handleOrientation = useCallback(
    (orientation: 'vertical' | 'horizontal') => {
      setOrientation(orientation);
    },
    []
  );

  const handleTabChange = useCallback(
    (value: string) => {
      const findTrigger = trigger.find((item) => item.value === value);

      if (findTrigger) {
        setActiveTab(findTrigger.value);
        return;
      }

      return;
    },
    [trigger]
  );

  const defaultTab = useCallback((value: string) => {
    setActiveTab(value);
  }, []);

  useEffect(() => {
    if (!activeTab) {
      const firstTrigger = trigger[0];

      if (firstTrigger) {
        setActiveTab(firstTrigger.value);
      }
    }
  }, [activeTab, trigger]);

  return (
    <TabsContext.Provider
      value={{
        addTrigger,
        defaultTab,
        handleOrientation,
        activeTab,
        orientation,
        handleTabChange,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};

export const useTabsContext = () => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error('useTabsContext must be used within a TabsProvider');
  }

  return context;
};
