import Flex from 'components/Flex';
import { useEffect } from 'react';
import { TabsProvider, useTabsContext } from './TabsContext';

interface TabsProps {
  children: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
}

function Tabs({ children, orientation = 'horizontal' }: TabsProps) {
  return (
    <TabsProvider>
      <TabsWrapper orientation={orientation}>{children}</TabsWrapper>
    </TabsProvider>
  );
}

function TabsWrapper({ children, orientation = 'horizontal' }: TabsProps) {
  const { handleOrientation } = useTabsContext();

  useEffect(() => {
    handleOrientation(orientation);
  }, [orientation, handleOrientation]);
  return (
    <Flex
      direction={orientation === 'horizontal' ? 'column' : 'row'}
      css={{ width: '100%' }}
    >
      {children}
    </Flex>
  );
}

export default Tabs;
