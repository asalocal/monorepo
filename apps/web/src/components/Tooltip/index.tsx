import { IconProps } from '@modulz/radix-icons/dist/types';
import Flex from 'components/Flex';
import Icon from 'components/Icon';
import { useState } from 'react';

import { FiAnchor } from 'react-icons/fi';

import { IconBaseProps } from 'react-icons/lib';
import { TooltipWrapper } from './styles';

interface TooltipProps {
  children: React.ReactNode;
  icon?: (props: IconProps) => JSX.Element | React.ReactElement<IconBaseProps>;
}

function Tooltip({ children, icon = FiAnchor }: TooltipProps) {
  const [active, setActive] = useState(false);
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      css={{
        position: 'relative',
        padding: 10,
      }}
    >
      <TooltipWrapper as="span" active={active}>
        {children}
      </TooltipWrapper>

      <Flex
        css={{
          padding: 5,
          backgroundColor: '$primary',
          color: '$gray1',
          borderRadius: '40px',
        }}
        onMouseOver={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <Icon icon={icon} />
      </Flex>
    </Flex>
  );
}

export default Tooltip;
