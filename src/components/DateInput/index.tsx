import {
  ChangeEvent,
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
  onChange,
  ...props
}: DateInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const {
    registerPositions,
    calendarOpen,
    handleCalendar,
    value,
    handleValue,
  } = useDateInputContext();

  const inputRef = useRef<HTMLDivElement>(null);

  const handleChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      setIsFocused(!!ev.target.value);
      handleValue(ev.target.value);
      onChange && onChange(ev);
    },
    [onChange, handleValue]
  );

  const setFocus = useCallback(
    (ev) => {
      setIsFocused((prevState) => !prevState);

      handleCalendar();
    },
    [handleCalendar]
  );

  const handleBlur = useCallback(() => {
    setIsFocused((prevState) => !prevState);
  }, []);

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
      setIsFocused(true);
    }
  }, [placeholder, defaultValue]);

  return (
    <>
      <InputContainer ref={inputRef}>
        <InputContent>
          <DateInputLabel isFocused={isFocused} htmlFor={id}>
            {label}
          </DateInputLabel>
          <InputWrapper
            onChange={handleChange}
            onFocus={setFocus}
            onBlur={handleBlur}
            name={name}
            id={id}
            {...props}
          />
          <CalendarIcon />
        </InputContent>
      </InputContainer>
      {calendarOpen && <Calendar />}
    </>
  );
}

export default DateInput;
