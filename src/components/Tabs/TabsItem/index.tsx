import { useEffect } from 'react';
import generateHash from 'utils/generateHash';
import { useTabsContext } from '../TabsContext';
import { TabsItemContainer, TabsItemTrigger } from './styles';

interface TabsItemProps {
  children: React.ReactNode;
  value: string;
  id?: string;
}

function TabsItem({
  children,
  value,
  id = `trigger-${generateHash()}`,
}: TabsItemProps) {
  const { addTrigger, activeTab, handleTabChange } = useTabsContext();

  useEffect(() => {
    addTrigger({ id, value });
  }, [addTrigger, id, value]);

  return (
    <TabsItemContainer active={activeTab === value}>
      <TabsItemTrigger onClick={() => handleTabChange(value)} value={value}>
        {children}
      </TabsItemTrigger>
    </TabsItemContainer>
  );
}

export default TabsItem;
