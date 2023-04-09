import {
  ButtonHTMLAttributes,
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { BYTCSS } from 'styles/Theme.provider';
import { OptionWrapper } from './styles';
import { useAutocomplete } from '../AutocompleteContext';

export interface AutocompleteOptionProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  value: string;
  css?: BYTCSS;
}

const AutocompleteOption = forwardRef(
  (
    { children, css, value, ...props }: AutocompleteOptionProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const { setValue, handleOptions, setShowOptions, displayedOptions } =
      useAutocomplete();

    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
      handleOptions(value);
    }, []);

    useImperativeHandle(
      ref,
      () => {
        if (buttonRef.current) return buttonRef.current as HTMLButtonElement;

        return {} as HTMLButtonElement;
      },
      []
    );

    return (
      <OptionWrapper
        isBeingSearched={
          displayedOptions.filter((item) => item === value).length !== 0
        }
        tabIndex={0}
        value={value}
        type="button"
        ref={buttonRef}
        css={css}
        onClick={() => {
          setValue(value);
          setShowOptions(false);
        }}
        {...props}
      >
        {children}
      </OptionWrapper>
    );
  }
);
export default AutocompleteOption;
