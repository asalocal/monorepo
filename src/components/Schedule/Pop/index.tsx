import Button from 'components/Button';
import Flex from 'components/Flex';
import Text from 'components/Text';
import { useSchedule } from 'context/ScheduleContext';
import { FiMapPin } from 'react-icons/fi';
import { LocationBadge, LocationButton, PopContainer } from './styles';

function SchedulePop() {
  const { schedule } = useSchedule();

  return (
    <>
      {schedule.cities && (
        <>
          <PopContainer alignItems="center" justifyContent="spaceBetween">
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
                  if (index >= 3) {
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
            <LocationButton variant="ghost">
              <FiMapPin />
              <LocationBadge alignItems="center" justifyContent="center">
                {schedule.cities.length}
              </LocationBadge>
            </LocationButton>
          </PopContainer>
        </>
      )}
    </>
  );
}

export default SchedulePop;
