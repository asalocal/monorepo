import Flex from 'components/Flex';
import Text from 'components/Text';
import generateHash from 'utils/generateHash';

interface WeekdaysProps {
  weekdays: string[];
}

function Weekdays({ weekdays, ...props }: WeekdaysProps) {
  return (
    <>
      <Flex
        justifyContent="spaceBetween"
        css={{ marginTop: '10px' }}
        {...props}
      >
        {weekdays.map((day, index) => (
          <Text
            key={`${day}-${generateHash()}`}
            css={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              opacity: 0.5,
              fontSize: '0.75rem',
            }}
          >
            {day}
          </Text>
        ))}
      </Flex>
    </>
  );
}

export default Weekdays;
