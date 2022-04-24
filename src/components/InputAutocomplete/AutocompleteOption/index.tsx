import { OptionHTMLAttributes, useEffect } from 'react';
import { BYTCSS } from 'styles/Theme.provider';
import { OptionWrapper } from './styles';

export interface AutocompleteOptionProps
  extends OptionHTMLAttributes<HTMLOptionElement> {
  children: React.ReactNode;
  value: string;
  css?: BYTCSS;
}

function AutocompleteOption({
  children,
  css,
  value,
  ...props
}: AutocompleteOptionProps) {
  return (
    <>
      <OptionWrapper
        value={value}
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

export default AutocompleteOption;
