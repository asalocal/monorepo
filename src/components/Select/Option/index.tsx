import { OptionHTMLAttributes } from 'react';
import { BYTCSS } from 'styles/Theme.provider';
import { OptionWrapper } from '../styles';

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
  children: React.ReactNode;
  css?: BYTCSS;
}

function Option({ children, css, ...props }: OptionProps) {
  return (
    <>
      <OptionWrapper css={css} {...props}>
        {children}
      </OptionWrapper>
    </>
  );
}

export default Option;
