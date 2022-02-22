import Button from 'components/Button';
import Flex from 'components/Flex';
import Text from 'components/Text';
import { useSchedule } from 'context/ScheduleContext';
import { FiMapPin } from 'react-icons/fi';

function SchedulePop() {
  const { schedule } = useSchedule();

  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="spaceBetween"
        css={{
          backgroundColor: '$gray1',
          boxShadow: '0 0 5px 2px rgba(0,0,0, 0.2)',
          borderBottom: '2px solid $primary',
          position: 'fixed',
          bottom: '10px',
          right: '10px',
          maxWidth: '400px',
          width: '100%',
          padding: '15px',
          borderRadius: '5px',
        }}
      >
        <Flex direction="column">
          <Text as="h5" css={{ color: '$text' }}>
            🛬 You're planning to go to {schedule.cities[0].location}
          </Text>

          <Text
            as="p"
            css={{
              fontSize: '12px',
              marginTop: '5px',
              color: '$textAlternative',
            }}
          >
            Your current trip includes {schedule.cities.length}{' '}
            {schedule.cities.length > 1 ? 'cities' : 'city'}
          </Text>

          <Flex
            flexWrap="wrap"
            css={{ marginTop: '15px', color: '$text', width: '100%' }}
          >
            {schedule.cities.map(({ name }, index) => {
              if (index === 3) {
                return (
                  <>
                    <Text as="h5" css={{ marginLeft: '5px' }}>
                      and more...
                    </Text>
                  </>
                );
              }

              return (
                <>
                  {index < 2 && (
                    <Text
                      as="h5"
                      css={{
                        '& + &': {
                          marginLeft: '5px',
                        },
                      }}
                    >
                      {name},
                    </Text>
                  )}
                </>
              );
            })}
          </Flex>
        </Flex>
        <Button
          variant="ghost"
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '70px',

            svg: {
              fontSize: '30px',
              marginRight: '15px',
            },
          }}
        >
          <FiMapPin />
          <Flex
            alignItems="center"
            justifyContent="center"
            css={{
              position: 'absolute',
              width: '25px',
              height: '25px',
              marginTop: -15,
              marginLeft: '5px',
              borderRadius: '50%',
              backgroundColor: 'red',
              color: '$gray1',
            }}
          >
            {schedule.cities.length}
          </Flex>
        </Button>
      </Flex>
    </>
  );
}

export default SchedulePop;
