import React from 'react';
import { TrashIcon } from '@modulz/radix-icons';
import Button from '@kaiju-ui/button';
import Flex from 'components/Flex';
import Modal from 'components/Modal';
import Text from 'components/Text';
import { useSchedule } from 'context/ScheduleContext';
import { useState } from 'react';
import { FiMapPin } from 'react-icons/fi';
import ScheduleListModal from '../ScheduleListModal';
import { LocationBadge, LocationButton, PopContainer } from './styles';

function SchedulePop() {
  const [isOpen, setIsOpen] = useState(false);
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
                  if (index > 2) return;

                  if (index > 1 && index < schedule.cities.length - 1) {
                    return (
                      <React.Fragment key={`${index}-${name}`}>
                        <Text
                          as="h5"
                          css={{
                            '& + &': {
                              marginLeft: '5px',
                            },
                          }}
                        >
                          and more...
                        </Text>
                      </React.Fragment>
                    );
                  }

                  return (
                    <React.Fragment key={`${index}-${name}`}>
                      <Text
                        as="h5"
                        css={{
                          '& + &': {
                            marginLeft: '5px',
                          },
                        }}
                      >
                        {name}
                        {schedule.cities.length - 1 === index ? '' : ', '}
                      </Text>
                    </React.Fragment>
                  );
                })}
              </Flex>
            </Flex>
            <LocationButton onClick={() => setIsOpen(true)} variant="ghost">
              <FiMapPin />
              <LocationBadge alignItems="center" justifyContent="center">
                {schedule.cities.length}
              </LocationBadge>
            </LocationButton>
          </PopContainer>
          <ScheduleListModal
            open={isOpen}
            onCloseModal={() => setIsOpen(false)}
          />
        </>
      )}
    </>
  );
}

export default SchedulePop;
