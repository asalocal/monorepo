import {
  EyeClosedIcon,
  EyeOpenIcon,
  ExclamationTriangleIcon,
} from '@modulz/radix-icons';
import Flex from 'components/Flex';
import Text from 'components/Text';
import { useField } from '@unform/core';
import {
  ChangeEvent,
  InputHTMLAttributes,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useImperativeHandle,
  useState,
  forwardRef,
} from 'react';
import { BYTCSS } from '@kaiju-ui/theme';

import StrenghtPassword from './StrenghtPassword';

import {
  ErrorMessage,
  InputContainer,
  InputWrapper,
  Label,
  ShowPasswordButton,
  InputContent,
} from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  verifyPassword?: boolean;
  name: string;
  label: string | React.ReactNode;
  theme?: 'light' | 'primary';
  css?: BYTCSS;
  validationPattern?: RegExp;
  validationMessage?: string;
  maskValue?: (value: string) => string;
}

const Input = forwardRef((inputProps: InputProps, ref) => {
  const {
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
    onFocus,
    onBlur,
    validationPattern,
    validationMessage,
    disabled,
    maskValue,
    ...props
  } = inputProps;

  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isShowingMessage, setIsShowingMessage] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const [error, setError] = useState(false);
  const [timer, setTimer] = useState<any>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => inputRef.current);

  const handleInputBlur = useCallback(
    (ev: any) => {
      clearTimeout(timer);
      setIsFilled(!!ev.target.value);

      setIsFocus(false);

      if (onBlur) {
        onBlur(ev);
      }

      if (validationPattern && ev.target.value.length > 0) {
        return setError(!validationPattern.test(ev.target.value));
      }
    },
    [validationPattern, onBlur, timer]
  );

  const handleInputFocus = useCallback(
    (ev): void => {
      const newState = !isFocus;

      newState ? inputRef.current?.focus() : inputRef.current?.blur();

      setIsFocus(newState);

      setIsFilled(!!ev.target.value);

      if (onFocus) {
        onFocus(ev);
      }
    },
    [isFocus]
  );

  const handleShowPassword = useCallback(() => {
    setIsShowingMessage(!isShowingMessage);
  }, [isShowingMessage]);

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      clearTimeout(timer);
      setValue(e.target.value);

      placeholder ? setIsFilled(true) : setIsFilled(!!e.target.value);

      if (maskValue && inputRef.current) {
        const valueFormatted = maskValue(e.target.value);

        inputRef.current.value = valueFormatted;
      }

      if (onChange) {
        onChange(e);
      }

      if (validationPattern && e.target.value.length > 0) {
        const timer = setTimeout(() => {
          setError(!validationPattern.test(e.target.value));
        }, 1000);

        return setTimer(timer);
      }
    },
    [onChange, placeholder, maskValue, timer]
  );

  const handleIsFilledOnReference = useMemo(() => {
    if (!inputRef.current) return isFilled;

    return isFilled || inputRef?.current?.value.length > 0;
  }, [isFilled, inputRef.current]);

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
      setIsFilled(!!defaultValue);
    }
  }, [defaultValue]);

  useEffect(() => {
    if (controlledValue) {
      setIsFilled(true);
    }
  }, [controlledValue]);

  return (
    <Flex direction="column" css={{ width: '100%' }}>
      <InputContent>
        <InputContainer hasError={error} css={css} theme={theme}>
          <Label
            disabled={disabled}
            isFocused={isFocus}
            htmlFor={name}
            isFilled={handleIsFilledOnReference}
            theme={theme}
            css={
              error
                ? {
                    color: 'red',
                  }
                : {}
            }
          >
            {label}
          </Label>
          <InputWrapper
            ref={inputRef}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
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
      </InputContent>
      {error && (
        <Flex
          alignItems="center"
          css={{
            marginTop: '5px',
            svg: {
              color: 'red',
              marginRight: '10px',
            },
          }}
        >
          <ExclamationTriangleIcon />
          <Text
            css={{
              color: 'red',
            }}
          >
            {validationMessage}
          </Text>
        </Flex>
      )}
      {type === 'password' && verifyPassword && (
        <StrenghtPassword password={value} />
      )}
    </Flex>
  );
});

export default Input;
