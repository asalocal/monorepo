import { ChevronLeftIcon, ChevronRightIcon } from '@modulz/radix-icons';
import Button from 'components/Button';
import { useDateInputContext } from 'components/DateInput/DateInputContext';
import Flex from 'components/Flex';
import Text from 'components/Text';

function CalendarHeader() {
  const { handleNextMonth, handlePrevMonth, months, currentMonth } =
    useDateInputContext();

  return (
    <Flex alignItems="center" justifyContent="center">
      <Button
        variant="ghost"
        disabled={new Date().getMonth() === currentMonth}
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
  );
}

export default CalendarHeader;
