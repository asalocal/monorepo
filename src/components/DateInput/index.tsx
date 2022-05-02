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
import { useLayoutEffectSSR } from 'components/system/useLayoutEffect';
interface DateInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  placeholder?: string;
  validationDate?: string;
  onDateChange?: (date: string) => void;
  defaultValue?: string;
}

function DateInput({
  label,
  placeholder,
  validationDate,
  name,
  onDateChange,
  defaultValue,
  ...props
}: DateInputProps) {
  return (
    <DateInputProvider>
      <DateInputWrapper
        label={label}
        validationDate={validationDate}
        placeholder={placeholder}
        name={name}
        defaultValue={defaultValue}
        onDateChange={onDateChange}
        {...props}
      />
    </DateInputProvider>
  );
}

function DateInputWrapper({
  label,
  name,
  placeholder,
  validationDate,
  defaultValue,
  onDateChange,
  onChange,
  ...props
}: DateInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const [inputValue, setInputValue] = useState<string | readonly string[]>('');

  const {
    registerPositions,
    calendarOpen,
    setYear,
    handleValue,
    handleDefaultValue,
    handleCalendar,
    handleValidationDate,
    value,
  } = useDateInputContext();

  const { fieldName, registerField, error } = useField(name);

  const divContainerRef = useRef<HTMLDivElement>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const valueDateRegex = /(?=[0-9]{2,2}\/[0-9]{2,2}\/[0-9]{4,4})/gm;

  const handleChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      setIsFocused(!!ev.target.value);

      const valueMasked = maskCreation({
        type: 'date',
        value: ev.target.value,
      });

      if (valueDateRegex.test(valueMasked)) {
        const valueSplitted = valueMasked.split('/');
        const day = Number(valueSplitted[0]);
        const month = Number(valueSplitted[1]);
        const year = valueSplitted[2];

        handleValue({
          day,
          month,
          year,
          formatted: valueMasked,
        });
      }

      setInputValue(valueMasked);

      onChange && onChange(ev);
    },
    [onChange, handleValue, valueDateRegex]
  );

  const setFocus = useCallback(() => {
    handleCalendar();

    if (hasValue) {
      setIsFocused(true);
      return;
    }

    setIsFocused((prevState) => !prevState);
  }, [handleCalendar, hasValue]);

  useEffect(() => {
    setHasValue(!!value.formatted);
    onDateChange && onDateChange(value.formatted);
  }, [value]);

  useEffect(() => {
    if (validationDate) {
      handleValidationDate(validationDate);
    }
  }, [validationDate]);

  useLayoutEffectSSR(() => {
    const xPosition = divContainerRef.current?.getBoundingClientRect().x;
    const yPosition = divContainerRef.current?.getBoundingClientRect().y;

    if (xPosition && yPosition) {
      registerPositions({
        x: xPosition,
        y: yPosition,
      });
    }
  }, [registerPositions, divContainerRef.current]);

  useEffect(() => {
    if (placeholder || defaultValue) {
      setIsFocused(true);
    }
  }, [placeholder, defaultValue]);

  useEffect(() => {
    if (defaultValue) {
      const splittedDate = defaultValue.split('/');

      handleDefaultValue({
        day: Number(splittedDate[0]),
        month: Number(splittedDate[1]),
        year: splittedDate[2],
        formatted: defaultValue,
      });
    }
  }, []);

  useEffect(() => {
    setYear('2021');
  }, [setYear]);

  useEffect(() => {
    document.addEventListener('click', (ev) => {
      if (ev.target !== inputRef.current) {
        if (hasValue || !!inputRef.current?.value) {
          setIsFocused(true);
          return;
        }

        setIsFocused(false);
      }
    });

    return () => {
      document.removeEventListener('click', () => {});
    };
  }, [hasValue, inputRef.current]);

  useEffect(() => {
    if (value.formatted) {
      setInputValue(value.formatted);
      setIsFocused(true);
    }
  }, [value]);

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
            name={name}
            id={name}
            maxLength={10}
            value={inputValue}
            ref={inputRef}
            {...props}
          />
          <CalendarIcon />
        </InputContent>
        {calendarOpen && <Calendar onDateChange={onDateChange} />}
      </InputContainer>
    </>
  );
}

export default DateInput;
