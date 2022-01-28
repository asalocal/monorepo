import Flex from 'components/Flex';
import Text from 'components/Text';
import Portal from '../../Portal';
import { useDateInputContext } from '../DateInputContext';
import { CalendarContainer } from './styles';
import { ChevronLeftIcon, ChevronRightIcon } from '@modulz/radix-icons';
import Button from 'components/Button';
import { useCallback, useEffect, useRef, useState } from 'react';
import Day from './Day';
import Weekdays from './Weekdays';

const months = [
  'January',
  'February',
  'March',
  'July',
  'June',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 1, 2,
];

function Calendar() {
  const [currentDay, setCurrentDay] = useState(5);
  const { positions, setCurrentMonth, currentMonth, handleCalendar, month } =
    useDateInputContext();

  const calendarRef = useRef<HTMLDivElement>(null);

  const handleClickOnOverlay = useCallback(() => {
    handleCalendar(false);
  }, [handleCalendar]);

  const handleDayClick = useCallback((value: number) => {
    setCurrentDay(value);
  }, []);

  const handlePrevMonth = useCallback(() => {
    setCurrentMonth((prevState) => {
      if (prevState === 0) {
        return months.length - 1;
      }

      return prevState - 1;
    });
  }, [setCurrentMonth]);

  const handleNextMonth = useCallback(() => {
    setCurrentMonth((prevState) => {
      if (prevState === months.length - 1) {
        return 0;
      }

      return prevState + 1;
    });
  }, [setCurrentMonth]);

  useEffect(() => {
    function handleMouseDown(event: MouseEvent) {
      if (calendarRef.current) {
        if (!calendarRef.current.contains(event.target as Node)) {
          handleClickOnOverlay();
        }
      }
    }

    document.addEventListener('mousedown', handleMouseDown);

    return () => document.removeEventListener('mousedown', handleMouseDown);
  }, [handleClickOnOverlay]);

  useEffect(() => {
    function handleScroll() {
      handleClickOnOverlay();
    }

    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleClickOnOverlay]);

  return (
    <>
      <Portal>
        <CalendarContainer
          ref={calendarRef}
          css={{
            zIndex: 99999,
            transform: `translate(${positions.x / 1.25}px, ${
              positions.y + 70
            }px)`,
          }}
        >
          <Text
            as="span"
            css={{
              opacity: 0.3,
              fontSize: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Calendar
          </Text>

          <Flex alignItems="center" justifyContent="center">
            <Button
              variant="ghost"
              disabled={currentMonth === 0}
              onClick={handlePrevMonth}
              css={{ width: 'fit-content' }}
            >
              <ChevronLeftIcon />
            </Button>
            <Text
              as="span"
              css={{
                fontSize: '1.2rem',
                fontWeight: '700',
                minWidth: '110px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {month[currentMonth]}
            </Text>

            <Button
              variant="ghost"
              onClick={handleNextMonth}
              disabled={currentMonth === months.length - 1}
              css={{ width: 'fit-content' }}
            >
              <ChevronRightIcon />
            </Button>
          </Flex>
          <Flex justifyContent="center">
            <Text css={{ color: '$gray9', fontSize: '0.8rem' }}>2021</Text>
          </Flex>

          <Flex
            direction="column"
            css={{
              padding: 10,
              width: '100%',
            }}
          >
            <Weekdays
              weekdays={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
            />
            <Flex direction="column" css={{ padding: '5px' }}>
              <Flex css={{ marginTop: '10px' }} justifyContent="spaceBetween">
                {days.map((day, index) => {
                  if (index > 6) {
                    return null;
                  }

                  return (
                    <>
                      <Day
                        onClick={() => handleDayClick(day)}
                        active={currentDay === day}
                      >
                        {day}
                      </Day>
                    </>
                  );
                })}
              </Flex>
              <Flex css={{ marginTop: '5px' }} justifyContent="spaceBetween">
                {days.map((day, index) => {
                  if (index < 6) {
                    return null;
                  }

                  if (index > 12) {
                    return null;
                  }

                  return (
                    <>
                      <Day
                        onClick={() => handleDayClick(day)}
                        active={currentDay === day}
                      >
                        {day}
                      </Day>
                    </>
                  );
                })}
              </Flex>
              <Flex css={{ marginTop: '5px' }} justifyContent="spaceBetween">
                {days.map((day, index) => {
                  if (index < 12) {
                    return null;
                  }

                  if (index > 18) {
                    return null;
                  }

                  return (
                    <>
                      <Day
                        onClick={() => handleDayClick(day)}
                        active={currentDay === day}
                      >
                        {day}
                      </Day>
                    </>
                  );
                })}
              </Flex>
              <Flex css={{ marginTop: '5px' }} justifyContent="spaceBetween">
                {days.map((day, index) => {
                  if (index < 18) {
                    return null;
                  }

                  if (index > 24) {
                    return null;
                  }

                  return (
                    <>
                      <Day
                        onClick={() => handleDayClick(day)}
                        active={currentDay === day}
                      >
                        {day}
                      </Day>
                    </>
                  );
                })}
              </Flex>
              <Flex css={{ marginTop: '5px' }} justifyContent="spaceBetween">
                {days.map((day, index) => {
                  if (index < 25) {
                    return null;
                  }

                  if (index > days.length - 1) {
                    return null;
                  }

                  return (
                    <>
                      <Day
                        onClick={() => handleDayClick(day)}
                        active={currentDay === day}
                      >
                        {day}
                      </Day>
                    </>
                  );
                })}
              </Flex>
            </Flex>
          </Flex>
        </CalendarContainer>
      </Portal>
    </>
  );
}

export default Calendar;
