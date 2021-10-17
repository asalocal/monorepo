import { FiUser } from 'react-icons/fi';
import {
  ChangeEvent,
  InputHTMLAttributes,
  useCallback,
  useRef,
  useState,
} from 'react';
import { InputContainer, InputWrapper, Label } from './styles';
import StrenghtPassword from './StrenghtPassword';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

function Input({ type = 'text', placeholder, ...props }: InputProps) {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [isFilled, setIsFilled] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFocus = useCallback((): void => {
    const newState = !isFocus;

    newState ? inputRef.current?.focus() : inputRef.current?.blur();

    setIsFocus(newState);
  }, [isFocus]);

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setIsFilled(!!e.target.value);
  }, []);

  return (
    <>
      <InputContainer>
        <Label
          onClick={handleInputFocus}
          isFocused={isFocus}
          isFilled={isFilled}
        >
          <FiUser />
          {placeholder}
        </Label>
        <InputWrapper
          ref={inputRef}
          onFocus={handleInputFocus}
          onBlur={handleInputFocus}
          onChange={handleInputChange}
          type={type}
          {...props}
        />
      </InputContainer>
      {type === 'password' && <StrenghtPassword password={value} />}
    </>
  );
}

export default Input;
