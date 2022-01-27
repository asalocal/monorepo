import Flex from 'components/Flex';
import Text from 'components/Text';

interface WeekdaysProps {
  weekdays: string[];
}

function Weekdays({ weekdays }: WeekdaysProps) {
  return (
    <>
      <Flex justifyContent="spaceBetween" css={{ marginTop: '10px' }}>
        {weekdays.map((day, index) => (
          <Text
            css={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              opacity: 0.5,
              fontSize: '0.7rem',
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
