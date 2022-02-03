import Flex from 'components/Flex';
import Icon from 'components/Icon';
import Text from 'components/Text';
import { useState } from 'react';
import { IconBaseProps } from 'react-icons/lib';

interface TooltipProps {
  children: React.ReactNode;
  icon: React.ComponentType<IconBaseProps>;
}

function Tooltip({ children, icon }: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      css={{
        padding: '10px',
        width: '100%',
        position: 'relative',

        '&:hover span': {
          opacity: 1,
          visibility: 'visible',
        },
      }}
    >
      <Text
        as="span"
        css={{
          boxShadow: '0 0 10px 2px rgba(0,0,0, 0.2)',
          width: 'fit-content',
          padding: '8px 12px',
          borderRadius: '5px',
          fontSize: '13px',
          zIndex: 1,
          position: 'absolute',
          backgroundColor: '#fff',
          bottom: 'calc(60% + 10px)',

          opacity: 0,
          visibility: 'hidden',
          transition: 'all 0.2s ease-in-out',

          '&::before': {
            content: '',
            borderStyle: 'solid',
            borderColor: '#ffff transparent',
            borderWidth: '6px 6px 0 6px',
            bottom: '-5px',
            position: 'absolute',
            transform: 'translateX(-50%)',
            left: '50%',
          },
        }}
      >
        {children}
      </Text>

      <Icon icon={icon} />
    </Flex>
  );
}

export default Tooltip;
