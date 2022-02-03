import {
  ChangeEvent,
  InputHTMLAttributes,
  RefObject,
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
import { useField } from '@unform/core';

interface DateInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  placeholder?: string;
  defaultValue?: string;
}

function DateInput({
  label,
  placeholder,
  name,
  defaultValue,
  ...props
}: DateInputProps) {
  return (
    <DateInputProvider>
      <DateInputWrapper
        label={label}
        placeholder={placeholder}
        name={name}
        defaultValue={defaultValue}
        {...props}
      />
    </DateInputProvider>
  );
}

function DateInputWrapper({
  label,
  name,
  placeholder,
  defaultValue,
  onChange,
  ...props
}: DateInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const [inputValue, setInputValue] = useState<string | readonly string[]>('');

  const { registerPositions, calendarOpen, setYear, handleCalendar, value } =
    useDateInputContext();

  const { fieldName, registerField, error } = useField(name);

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
    if (value.formatted) {
      setInputValue(value.formatted);
    }
  }, [value.formatted]);

  useEffect(() => {
    if (defaultValue) {
      setHasValue(!!defaultValue);
      setInputValue(defaultValue);
    }
  }, [defaultValue]);

  useEffect(() => {
    if (defaultValue) {
      setIsFocused(true);
    }
  }, [defaultValue]);

  useEffect(() => {
    if (inputRef.current) {
      registerField({
        name: fieldName,
        ref: inputRef,
        getValue: (ref: RefObject<HTMLInputElement>) =>
          ref.current ? ref.current.value : '',
        setValue: (ref: RefObject<HTMLInputElement>, value: string) =>
          ref.current ? (ref.current.value = value) : value,
        clearValue: (ref: RefObject<HTMLInputElement>) =>
          ref.current ? (ref.current.value = '') : '',
      });
    }
  }, [fieldName, registerField]);

  return (
    <>
      <InputContainer ref={divContainerRef}>
        <InputContent>
          <DateInputLabel isFocused={isFocused} htmlFor={name}>
            {label}
          </DateInputLabel>
          <InputWrapper
            onChange={handleChange}
            onFocus={setFocus}
            onBlur={handleBlur}
            name={name}
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
