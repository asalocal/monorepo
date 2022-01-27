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

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(0);

  const { positions, handleCalendar, month, handleFocus } =
    useDateInputContext();

  const calendarRef = useRef<HTMLDivElement>(null);

  const handleClickOnOverlay = useCallback(() => {
    handleCalendar(false);
    handleFocus();
  }, [handleCalendar, handleFocus]);

  const handlePrevMonth = useCallback(() => {
    setCurrentMonth((prevState) => {
      if (prevState === 0) {
        return months.length - 1;
      }

      return prevState - 1;
    });
  }, []);

  const handleNextMonth = useCallback(() => {
    setCurrentMonth((prevState) => {
      if (prevState === months.length - 1) {
        return 0;
      }

      return prevState + 1;
    });
  }, []);

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
              {month[currentMonth]}
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
                <Day active={true}>1</Day>
                <Day active={false}>2</Day>
                <Day active={false}>3</Day>
                <Day active={false}>4</Day>
                <Day active={false}>5</Day>
                <Day active={false}>6</Day>
                <Day active={false}>7</Day>
              </Flex>
              <Flex css={{ marginTop: '5px' }} justifyContent="spaceBetween">
                <Day active={false}>8</Day>
                <Day active={false}>9</Day>
                <Day active={false}>10</Day>
                <Day active={false}>11</Day>
                <Day active={false}>12</Day>
                <Day active={false}>13</Day>
                <Day active={false}>14</Day>
              </Flex>
              <Flex css={{ marginTop: '5px' }} justifyContent="spaceBetween">
                <Day active={false}>15</Day>
                <Day active={false}>16</Day>
                <Day active={false}>17</Day>
                <Day active={false}>18</Day>
                <Day active={false}>19</Day>
                <Day active={false}>20</Day>
                <Day active={false}>21</Day>
              </Flex>
              <Flex css={{ marginTop: '5px' }} justifyContent="spaceBetween">
                <Day active={false}>22</Day>
                <Day active={false}>23</Day>
                <Day active={false}>24</Day>
                <Day active={false}>25</Day>
                <Day active={false}>26</Day>
                <Day active={false}>27</Day>
                <Day active={false}>28</Day>
              </Flex>
              <Flex css={{ marginTop: '5px' }} justifyContent="spaceBetween">
                <Day active={false}>29</Day>
                <Day active={false}>30</Day>
                <Day active={false}>31</Day>
                <Day active={false}>1</Day>
                <Day active={false}>2</Day>
                <Day active={false}>3</Day>
                <Day active={false}>4</Day>
              </Flex>
            </Flex>
          </Flex>
        </CalendarContainer>
      </Portal>
    </>
  );
}

export default Calendar;
