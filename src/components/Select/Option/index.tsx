import { OptionHTMLAttributes } from 'react';
import { OptionWrapper } from '../styles';

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
  children: React.ReactNode;
}

function Option({ children, ...props }: OptionProps) {
  return (
    <>
      <OptionWrapper {...props}>{children}</OptionWrapper>
    </>
  );
}

export default Option;
