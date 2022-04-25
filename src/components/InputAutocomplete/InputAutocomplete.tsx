import Flex from 'components/Flex';
import Input, { InputProps } from 'components/Input';
import Overlay from 'components/Overlay';
import Portal from 'components/Portal';
import { useLayoutEffectSSR } from 'components/system/useLayoutEffect';
import {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
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

  const allOptions = useMemo(() => {
    return children.map((child) => child.props.value);
  }, [children]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShowOptions(true);
    const options = onAutocomplete(event.target.value, allOptions);

    setInputOptions(options);
    setInputValue(event.target.value);
  };

  useLayoutEffectSSR(() => {
    if (inputRef.current) {
      const { x, y, width } = inputRef.current.getBoundingClientRect();

      setPositions({ x, y, width });
    }
  }, [inputRef.current]);

  useEffect(() => {
    if (inputValue.length === 0) {
      setInputOptions(children.map((child) => child.props.value));
    }
  }, [inputValue, children]);

  return (
    <>
      <Input
        ref={inputRef}
        {...props}
        onChange={onChange}
        value={inputValue}
        label={label}
      />
      {showOptions && (
        <Portal>
          <Overlay onClick={() => setShowOptions(false)}>
            <OptionsContainer
              direction="column"
              css={{
                minWidth: `${positions.width}px`,
                transform: `translate(${positions.x}px, ${positions.y + 50}px)`,
              }}
            >
              {inputOptions &&
                inputOptions.map((child) => (
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
          </Overlay>
        </Portal>
      )}
    </>
  );
}

export default InputAutocomplete;
