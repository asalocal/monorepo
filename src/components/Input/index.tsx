import { EyeClosedIcon, EyeOpenIcon } from '@modulz/radix-icons';
import { useField } from '@unform/core';
import {
  ChangeEvent,
  InputHTMLAttributes,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { BYTCSS } from 'styles/Theme.provider';

import StrenghtPassword from './StrenghtPassword';

import {
  ErrorMessage,
  InputContainer,
  InputWrapper,
  Label,
  ShowPasswordButton,
  InputContent,
} from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  verifyPassword?: boolean;
  name: string;
  label: string;
  theme?: 'light' | 'primary';
  css?: BYTCSS;
};

function Input({
  type = 'text',
  placeholder,
  verifyPassword = false,
  name,
  defaultValue,
  value: controlledValue,
  label,
  css,
  theme = 'primary',
  onChange,
  ...props
}: InputProps) {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isShowingMessage, setIsShowingMessage] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [isFilled, setIsFilled] = useState<boolean>(false);

  const { fieldName, registerField, error } = useField(name);

  const { disabled } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFocus = useCallback((): void => {
    const newState = !isFocus;

    newState ? inputRef.current?.focus() : inputRef.current?.blur();

    setIsFocus(newState);
  }, [isFocus]);

  const handleShowPassword = useCallback(() => {
    setIsShowingMessage(!isShowingMessage);
  }, [isShowingMessage]);

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);

      placeholder ? setIsFilled(true) : setIsFilled(!!e.target.value);
      onChange && onChange(e);
    },
    [onChange, placeholder]
  );

  const passwordType = useMemo(
    () => (type === 'password' && isShowingMessage ? 'text' : type),
    [isShowingMessage, type]
  );

  useEffect(() => {
    if (placeholder) {
      setIsFilled(true);
    }
  }, [placeholder]);

  useEffect(() => {
    if (defaultValue) {
      setIsFilled((prevState) => !prevState);
    }
  }, [defaultValue]);

  useEffect(() => {
    if (controlledValue) {
      setIsFilled(true);
    }
  }, [controlledValue]);

  useEffect(() => {
    if (inputRef.current && registerField) {
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
      <InputContent>
        <InputContainer hasError={!!false} css={css} theme={theme}>
          <Label
            disabled={disabled}
            isFocused={isFocus}
            htmlFor={name}
            isFilled={isFilled}
            theme={theme}
          >
            {label}
          </Label>
          <InputWrapper
            ref={inputRef}
            onFocus={handleInputFocus}
            onBlur={handleInputFocus}
            onChange={handleInputChange}
            defaultValue={defaultValue}
            type={passwordType}
            theme={theme}
            placeholder={placeholder}
            name={name}
            value={controlledValue}
            id={name}
            {...props}
          />
          {type === 'password' && (
            <ShowPasswordButton
              onClick={handleShowPassword}
              icon={isShowingMessage ? EyeOpenIcon : EyeClosedIcon}
            />
          )}
        </InputContainer>
        {error && <ErrorMessage theme={theme}>{error}</ErrorMessage>}
      </InputContent>

      {type === 'password' && verifyPassword && (
        <StrenghtPassword password={value} />
      )}
    </>
  );
}

export default Input;
