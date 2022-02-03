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

interface DayProps {
  day: number;
  month: number;
}

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

function Calendar() {
  const {
    positions,
    setCurrentMonth,
    handleMonthValue,
    currentMonth,
    value,
    days,
    handleNextMonth,
    handlePrevMonth,
    months,
    handleCalendar,
    year,
  } = useDateInputContext();

  const calendarRef = useRef<HTMLDivElement>(null);

  const handleClickOnOverlay = useCallback(() => {
    handleCalendar(false);
  }, [handleCalendar]);

  const handleDayClick = useCallback(
    ({ day, month }: DayProps) => {
      handleMonthValue({ month, day });
    },
    [handleMonthValue]
  );
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
              {months[currentMonth]}
            </Text>

            <Button
              variant="ghost"
              onClick={handleNextMonth}
              css={{ width: 'fit-content' }}
            >
              <ChevronRightIcon />
            </Button>
          </Flex>
          <Flex justifyContent="center">
            <Text css={{ color: '$gray9', fontSize: '0.8rem' }}>{year}</Text>
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
            <Flex direction="row" flexWrap="wrap" css={{ paddingTop: '5px' }}>
              {[...Array(days[0].UTCdate)].map((_, index) => (
                <Flex
                  css={{ maxWidth: '37px', width: '100%', height: '40px' }}
                ></Flex>
              ))}

              {days.map(({ day, month: dayMonth, UTCdate }, index) => {
                if (currentMonth === 1 && day > 28) {
                  return (
                    <Flex css={{ maxWidth: '37px', width: '100%' }}></Flex>
                  );
                }

                return (
                  <>
                    <Day
                      key={`${day}-${index}`}
                      onClick={() => handleDayClick({ day, month: dayMonth })}
                      active={value.day === day && currentMonth === dayMonth}
                    >
                      {day}
                    </Day>
                  </>
                );
              })}
            </Flex>
          </Flex>
        </CalendarContainer>
      </Portal>
    </>
  );
}

export default Calendar;
