import Flex from 'components/Flex';
import Text from 'components/Text';
import Portal from '../../Portal';
import { useDateInputContext } from '../DateInputContext';
import { CalendarContainer } from './styles';
import { useCallback, useEffect, useRef } from 'react';
import Day from './Day';
import Weekdays from './Weekdays';
import CalendarHeader from './CalendarHeader';
import generateHash from 'utils/generateHash';

interface DayProps {
  day: number;
  month: number;
}

function Calendar() {
  const {
    positions,
    handleMonthValue,
    currentMonth,
    value,
    days,
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
            transform: `translate(${positions.x}px, ${positions.y + 70}px)`,
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

          <CalendarHeader />

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
                  key={`${index}-${generateHash()}`}
                  css={{ maxWidth: '37px', width: '100%', height: '40px' }}
                ></Flex>
              ))}

              {days.map(({ day, month: dayMonth, year: fullYear }, index) => {
                if (currentMonth === 1 && day > 28) {
                  return (
                    <Flex
                      key={`${index}-${generateHash()}`}
                      css={{ maxWidth: '37px', width: '100%' }}
                    ></Flex>
                  );
                }

                return (
                  <>
                    <Day
                      key={`${day}-${generateHash()}`}
                      disabled={
                        day < new Date().getDay() &&
                        new Date().getMonth() === currentMonth
                      }
                      onClick={() => handleDayClick({ day, month: dayMonth })}
                      active={
                        value.day === day &&
                        currentMonth === dayMonth &&
                        fullYear === Number(year)
                      }
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
