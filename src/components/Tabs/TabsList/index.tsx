import { useEffect } from 'react';
import { useTabsContext } from '../TabsContext';
import { TabsListContainer } from './styles';

interface TabsListProps {
  children: React.ReactNode;
  defaultValue?: string;
  orientation?: 'horizontal' | 'vertical';
}

function TabsList({ children, defaultValue }: TabsListProps) {
  const { defaultTab, orientation } = useTabsContext();

  useEffect(() => {
    if (defaultValue) {
      defaultTab(defaultValue);
    }
  }, [defaultTab, defaultValue]);

  return (
    <TabsListContainer orientation={orientation}>{children}</TabsListContainer>
  );
}

export default TabsList;
