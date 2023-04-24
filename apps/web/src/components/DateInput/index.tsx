import {
  ChangeEvent,
  InputHTMLAttributes,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { InputContainer } from './styles';
import Calendar from './Calendar';
import { DateInputProvider, useDateInputContext } from './DateInputContext';
import maskCreation from 'utils/inputMaskCreation';
import { useField } from '@unform/core';
import Input from 'components/Input';
import useSignUpReferences from 'hooks/useSignUpReferences';
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
  const [inputValue, setInputValue] = useState<string | readonly string[]>('');

  const {
    calendarOpen,
    setYear,
    handleValue,
    handleDefaultValue,
    handleCalendar,
    handleValidationDate,
    value,
    setElements,
  } = useDateInputContext();

  const divContainerRef = useRef<HTMLDivElement>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  useSignUpReferences(inputRef.current, setElements);

  const valueDateRegex = /(?=[0-9]{2,2}\/[0-9]{2,2}\/[0-9]{4,4})/gm;

  const handleChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
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

  const setFocus = () => {
    handleCalendar();
  };

  useEffect(() => {
    onDateChange && onDateChange(value.formatted);
  }, [value]);

  useEffect(() => {
    if (validationDate) {
      handleValidationDate(validationDate);
    }
  }, [validationDate]);

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
    if (value.formatted) {
      setInputValue(value.formatted);
    }
  }, [value]);

  useEffect(() => {
    if (defaultValue) {
      setInputValue(defaultValue);
    }
  }, [defaultValue]);

  return (
    <>
      <InputContainer ref={divContainerRef}>
        <Input
          {...props}
          label={label}
          ref={inputRef}
          onFocus={setFocus}
          onBlur={(ev) => {
            ev.preventDefault();
          }}
          onChange={handleChange}
          name={name}
          id={name}
          maxLength={10}
          value={inputValue}
        />

        {calendarOpen && <Calendar onDateChange={onDateChange} />}
      </InputContainer>
    </>
  );
}

export default DateInput;
