import { useEffect } from 'react';
import { useTabsContext } from '../TabsContext';
import { TabsListContainer } from './styles';

interface TabsListProps {
  children: React.ReactNode;
  defaultValue?: string;
}

function TabsList({ children, defaultValue }: TabsListProps) {
  const { defaultTab } = useTabsContext();

  useEffect(() => {
    if (defaultValue) {
      defaultTab(defaultValue);
    }
  }, [defaultTab, defaultValue]);

  return <TabsListContainer>{children}</TabsListContainer>;
}

export default TabsList;
