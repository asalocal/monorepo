import { EyeClosedIcon, EyeOpenIcon } from '@modulz/radix-icons';
import {
  ChangeEvent,
  InputHTMLAttributes,
  useCallback,
  useRef,
  useState,
} from 'react';
import { InputContainer, InputWrapper, Label } from './styles';
import StrenghtPassword from './StrenghtPassword';
import Icon from 'components/Icon';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

function Input({ type = 'text', placeholder, ...props }: InputProps) {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isShowingMessage, setIsShowingMessage] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [isFilled, setIsFilled] = useState<boolean>(false);

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

  const passwordType = type === 'password' && isShowingMessage ? 'text' : type;

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
      {type === 'password' && <StrenghtPassword password={value} />}
    </>
  );
}

export default Input;
