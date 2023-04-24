import Flex from 'components/Flex';
import Input, { InputProps } from 'components/Input';
import useClickOuside from 'hooks/useClickOutside';
import useHandleScroll from 'hooks/useHandleScroll';
import { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';
import AutocompleteOption, {
  AutocompleteOptionProps,
} from './AutocompleteOption';
import { OptionsContainer } from './styles';
import { AutocompleteProvider, useAutocomplete } from './AutocompleteContext';
import useSignUpReferences from 'hooks/useSignUpReferences';

interface InputAutocompleteProps extends InputProps {
  label: string | React.ReactNode;
  children: React.ReactElement<AutocompleteOptionProps>[];
  onAutocomplete?: (inputValue: string, inputOptions: any[]) => any[];
}

function InputAutocomplete({ children, ...props }: InputAutocompleteProps) {
  return (
    <AutocompleteProvider>
      <InputAutocompleteComponent {...props}>
        {children}
      </InputAutocompleteComponent>
    </AutocompleteProvider>
  );
}

function InputAutocompleteComponent({
  label,
  children,
  onAutocomplete = undefined,
  onChange: handleChange,
  defaultValue,
  ...props
}: InputAutocompleteProps) {
  const {
    value,
    setValue,
    setShowOptions,
    setDisplayedOptions,
    elements,
    showOptions,
    allOptions,
  } = useAutocomplete();

  const [positions, setPositions] = useState<any>({} as any);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShowOptions(true);

    if (!onAutocomplete) {
      const filteredOptions = allOptions.filter(
        (option) =>
          option.toLowerCase().search(event.target.value.toLowerCase()) >= 0
      );

      setDisplayedOptions(filteredOptions);

      setValue(event.target.value);

      handleChange && handleChange(event);
      return;
    }

    const options = onAutocomplete(event.target.value, allOptions);

    setDisplayedOptions(options);

    setValue(event.target.value);

    handleChange && handleChange(event);
  };

  useEffect(() => {
    if (defaultValue && typeof defaultValue === 'string') {
      setDisplayedOptions(
        allOptions.filter(
          (option) =>
            option.toLowerCase().search(defaultValue.toLowerCase()) >= 0
        )
      );
    }
  }, [allOptions]);

  useEffect(() => {
    if (value && inputRef.current) {
      inputRef.current.value = value;
    }
  }, [value, inputRef.current]);

  useClickOuside({
    component: inputRef.current as HTMLInputElement,
    callback: (ev) => {
      const findElement = elements.find((el) => el === ev.target);

      if (!findElement) setShowOptions(false);
    },
    event: 'click',
  });

  useEffect(() => {
    if (value && inputRef.current) {
      inputRef.current.value = value;
    }
  }, [value, inputRef.current]);

  useClickOuside({
    component: inputRef.current as HTMLInputElement,
    callback: (ev) => {
      const findElement = elements.find((el) => el === ev.target);

      if (!findElement) setShowOptions(false);
    },
    event: 'click',
  });

  useEffect(() => {
    if (inputRef.current) {
      const { width } = inputRef.current.getBoundingClientRect();

      setPositions({ width });
    }
  }, [inputRef.current, showOptions]);

  return (
    <Flex direction="column" css={{ position: 'relative', width: '100%' }}>
      <Input
        ref={inputRef}
        onFocus={() => setShowOptions(true)}
        onBlur={() => {}}
        onChange={onChange}
        defaultValue={value}
        label={label}
        {...props}
      />
      {showOptions && (
        <OptionsContainer
          direction="column"
          css={{
            minWidth: `${positions.width}px`,
            transform: 'translateY(60px)',
          }}
        >
          {children}
        </OptionsContainer>
      )}
    </Flex>
  );
}

export default InputAutocomplete;
