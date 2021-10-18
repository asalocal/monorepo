import { EyeClosedIcon, EyeOpenIcon } from '@modulz/radix-icons';
import { useField } from '@unform/core';
import Icon from 'components/Icon';
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
import StrenghtPassword from './StrenghtPassword';
import { InputContainer, InputWrapper, Label } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  verifyPassword?: boolean;
  name: string;
};

function Input({
  type = 'text',
  placeholder,
  verifyPassword = false,
  name,
  ...props
}: InputProps) {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isShowingMessage, setIsShowingMessage] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [isFilled, setIsFilled] = useState<boolean>(false);

  const { fieldName, registerField } = useField(name);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFocus = useCallback((): void => {
    const newState = !isFocus;

    newState ? inputRef.current?.focus() : inputRef.current?.blur();

    setIsFocus(newState);
  }, [isFocus]);

  const handleShowPassword = useCallback(() => {
    setIsShowingMessage(!isShowingMessage);
  }, [isShowingMessage]);

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setIsFilled(!!e.target.value);
  }, []);

  const passwordType = useMemo(
    () => (type === 'password' && isShowingMessage ? 'text' : type),
    [isShowingMessage, type]
  );

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
  }, [fieldName, registerField, value]);

  return (
    <>
      <InputContainer>
        <Label
          onClick={handleInputFocus}
          isFocused={isFocus}
          isFilled={isFilled}
        >
          {placeholder}
        </Label>
        <InputWrapper
          ref={inputRef}
          onFocus={handleInputFocus}
          onBlur={handleInputFocus}
          onChange={handleInputChange}
          type={passwordType}
          {...props}
        />
        {type === 'password' && (
          <Icon
            onClick={handleShowPassword}
            icon={isShowingMessage ? EyeOpenIcon : EyeClosedIcon}
          />
        )}
      </InputContainer>
      {type === 'password' && verifyPassword && (
        <StrenghtPassword password={value} />
      )}
    </>
  );
}

export default Input;
