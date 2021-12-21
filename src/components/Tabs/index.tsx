import Flex from 'components/Flex';
import { useEffect } from 'react';
import { TabsProvider, useTabsContext } from './TabsContext';

interface TabsProps {
  children: React.ReactNode;
}
function TabsWrapper({ children }: TabsProps) {
  return <TabsProvider>{children}</TabsProvider>;
}

function Tabs({ children }: TabsProps) {
  return (
    <TabsWrapper>
      <Flex direction="column" css={{ width: '100%' }}>
        {children}
      </Flex>
    </TabsWrapper>
  );
}

export default Tabs;
