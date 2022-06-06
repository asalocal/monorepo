import {
  ForwardedRef,
  forwardRef,
  MutableRefObject,
  OptionHTMLAttributes,
  useEffect,
} from 'react';
import { BYTCSS } from 'styles/Theme.provider';
import { OptionWrapper } from './styles';

export interface AutocompleteOptionProps
  extends OptionHTMLAttributes<HTMLOptionElement> {
  children: React.ReactNode;
  value: string;
  css?: BYTCSS;
}

const AutocompleteOption = forwardRef(
  (
    { children, css, value, ...props }: AutocompleteOptionProps,
    ref: ForwardedRef<HTMLOptionElement>
  ) => {
    return (
      <>
        <OptionWrapper
          value={value}
          ref={ref}
          css={{
            ...css,
          }}
          {...props}
        >
          {children}
        </OptionWrapper>
      </>
    );
  }
);
export default AutocompleteOption;
