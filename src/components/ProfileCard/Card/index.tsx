import Flex from 'components/Flex';
import Text from 'components/Text';
import { forwardRef, HTMLAttributes } from 'react';
import { CardContainer } from './styles';

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card = forwardRef(({ children, ...props }: ICardProps, ref) => {
  return (
    <CardContainer direction="column" ref={ref} {...props}>
      <Flex
        css={{
          width: '100%',
          borderBottom: '1px solid rgba(0,0,0, 0.1)',
          padding: '10px',
        }}
      >
        <Text as="span" css={{ color: '$gray11', opacity: 0.5 }}>
          Profile
        </Text>
      </Flex>
      <Flex css={{ padding: '10px' }}>{children}</Flex>
    </CardContainer>
  );
});

export default Card;
