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
import maskCreation from 'utils/inputMaskCreation';

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
  const [hasValue, setHasValue] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const { registerPositions, calendarOpen, setYear, handleCalendar, value } =
    useDateInputContext();

  const divContainerRef = useRef<HTMLDivElement>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      setIsFocused(!!ev.target.value);

      const valueMasked = maskCreation({
        type: 'date',
        value: ev.target.value,
      });

      setInputValue(valueMasked);
      onChange && onChange(ev);
    },
    [onChange]
  );

  const setFocus = useCallback(
    (ev) => {
      handleCalendar();

      if (hasValue) {
        setIsFocused(true);
        return;
      }

      setIsFocused((prevState) => !prevState);
    },
    [handleCalendar, hasValue]
  );

  const handleBlur = useCallback(() => {
    if (hasValue) {
      setIsFocused(true);
      return;
    }

    setIsFocused((prevState) => !prevState);
  }, [hasValue]);

  useEffect(() => {
    setHasValue(!!value.formatted);
  }, [value]);

  useEffect(() => {
    const xPosition = divContainerRef.current?.getBoundingClientRect().left;
    const yPosition = divContainerRef.current?.getBoundingClientRect().top;

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

  useEffect(() => {
    setYear('2021');
  }, [setYear]);

  useEffect(() => {
    setInputValue(value.formatted);
  }, [value.formatted]);

  useEffect(() => {
    if (inputRef.current?.defaultValue) {
      setIsFocused(true);
    }
  }, [inputRef.current?.defaultValue]);

  return (
    <>
      <InputContainer ref={divContainerRef}>
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
            maxLength={10}
            value={inputValue}
            ref={inputRef}
            {...props}
          />
          <CalendarIcon />
        </InputContent>
        {calendarOpen && <Calendar />}
      </InputContainer>
    </>
  );
}

export default DateInput;
