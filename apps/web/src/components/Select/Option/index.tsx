import { OptionHTMLAttributes } from 'react';
import { BYTCSS } from '@kaiju-ui/theme';
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
