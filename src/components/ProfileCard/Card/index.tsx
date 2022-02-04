import Flex from 'components/Flex';
import Text from 'components/Text';
import { useProfileCard } from '../ProfileCardContext';
import { CardContainer } from './styles';

interface ICardProps {
  children: React.ReactNode;
}

function Card({ children }: ICardProps) {
  const { positions } = useProfileCard();
  return (
    <>
      <CardContainer
        direction="column"
        css={{
          transform: `translate(${positions.x - 50}px, ${positions.y + 30}px)`,
        }}
      >
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
    </>
  );
}

export default Card;
