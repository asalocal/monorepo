import {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  DateInputLabel,
  InputContainer,
  InputContent,
  InputWrapper,
} from './styles';
import { CalendarIcon } from '@modulz/radix-icons';
import Calendar from './Calendar';
import { DateInputProvider, useDateInputContext } from './DateInputContext';

interface DateInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  id: string;
  placeholder?: string;
}

function DateInput({ id, label, placeholder, name }: DateInputProps) {
  return (
    <DateInputProvider>
      <DateInputWrapper
        label={label}
        placeholder={placeholder}
        name={name}
        id={id}
      />
    </DateInputProvider>
  );
}

function DateInputWrapper({
  label,
  name,
  placeholder,
  defaultValue,
  id,
  ...props
}: DateInputProps) {
  const {
    registerPositions,
    calendarOpen,
    handleCalendar,
    isFocused,
    handleFocus,
  } = useDateInputContext();

  const inputRef = useRef<HTMLDivElement>(null);

  const setFocus = useCallback(() => {
    handleFocus();

    handleCalendar();
  }, [handleCalendar, handleFocus]);

  useEffect(() => {
    const xPosition = inputRef.current?.getBoundingClientRect().left;
    const yPosition = inputRef.current?.getBoundingClientRect().top;

    if (xPosition && yPosition) {
      registerPositions({
        x: xPosition,
        y: yPosition,
      });
    }
  }, [registerPositions]);

  useEffect(() => {
    if (placeholder || defaultValue) {
      handleFocus(true);
    }
  }, [handleFocus, placeholder, defaultValue]);

  return (
    <>
      <InputContainer ref={inputRef}>
        <InputContent>
          <DateInputLabel isFocused={isFocused} htmlFor={id}>
            {label}
          </DateInputLabel>
          <InputWrapper onClick={setFocus} name={name} id={id} {...props} />
          <CalendarIcon />
        </InputContent>
      </InputContainer>
      {calendarOpen && <Calendar />}
    </>
  );
}

export default DateInput;
