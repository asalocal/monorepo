import Flex from 'components/Flex';
import Input, { InputProps } from 'components/Input';
import useClickOuside from 'hooks/useClickOutside';
import useHandleScroll from 'hooks/useHandleScroll';
import { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';
import AutocompleteOption, {
  AutocompleteOptionProps,
} from './AutocompleteOption';
import { OptionsContainer } from './styles';

interface InputAutocompleteProps extends InputProps {
  label: string | React.ReactNode;
  children: React.ReactElement<AutocompleteOptionProps>[];
  onAutocomplete: (inputValue: string, inputOptions: any[]) => any[];
}

function InputAutocomplete({
  label,
  children,
  onAutocomplete,
  ...props
}: InputAutocompleteProps) {
  const [inputOptions, setInputOptions] = useState<string[]>(
    children.map((child) => child.props.value)
  );
  const [inputValue, setInputValue] = useState('');
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [positions, setPositions] = useState<any>({} as any);
  const inputRef = useRef<HTMLInputElement>(null);

  useClickOuside({
    component: inputRef.current as HTMLInputElement,
    callback: () => setShowOptions(false),
    event: 'click',
  });

  const allOptions = useMemo(() => {
    return children.map((child) => child.props.value);
  }, [children]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShowOptions(true);
    const options = onAutocomplete(event.target.value, allOptions);

    setInputOptions(options);
    setInputValue(event.target.value);
  };

  useHandleScroll(() => {
    setShowOptions(false);
  });

  useEffect(() => {
    if (inputRef.current) {
      const { width } = inputRef.current.getBoundingClientRect();

      setPositions({ width });
    }
  }, [inputRef.current, showOptions]);

  useEffect(() => {
    if (inputValue.length === 0) {
      setInputOptions(children.map((child) => child.props.value));
    }
  }, [inputValue, children]);

  return (
    <Flex direction="column" css={{ position: 'relative', width: '100%' }}>
      <Input
        ref={inputRef}
        onFocus={() => setShowOptions(true)}
        onChange={onChange}
        value={inputValue}
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
          {inputOptions &&
            inputOptions.map((child, i) => (
              <AutocompleteOption
                key={child}
                value={child}
                onClick={() => {
                  setInputValue(child);
                  setShowOptions(false);
                }}
              >
                {child}
              </AutocompleteOption>
            ))}
        </OptionsContainer>
      )}
    </Flex>
  );
}

export default InputAutocomplete;
