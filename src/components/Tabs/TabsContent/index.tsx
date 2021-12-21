import { useTabsContext } from '../TabsContext';
import { TabsContentContainer } from './styles';

interface TabsContentProps {
  children: React.ReactNode;
  value: string;
}

function TabsContent({ children, value }: TabsContentProps) {
  const { activeTab } = useTabsContext();

  return (
    <TabsContentContainer active={activeTab === value}>
      {children}
    </TabsContentContainer>
  );
}

export default TabsContent;
