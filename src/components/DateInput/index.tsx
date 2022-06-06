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
  } = useDateInputContext();

  const { fieldName, registerField, error } = useField(name);

  const divContainerRef = useRef<HTMLDivElement>(null);

  const inputRef = useRef<HTMLInputElement>(null);

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
        <Input
          label={label}
          ref={inputRef}
          onFocus={setFocus}
          onChange={handleChange}
          name={name}
          id={name}
          maxLength={10}
          value={inputValue}
          {...props}
        />

        {calendarOpen && <Calendar onDateChange={onDateChange} />}
      </InputContainer>
    </>
  );
}

export default DateInput;
