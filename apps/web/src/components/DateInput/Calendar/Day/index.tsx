import { ButtonHTMLAttributes, useRef } from 'react';
import { DayButtonContainer } from './styles';

interface DayProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  active: boolean;
  validation: boolean;
}

function Day({ children, active, validation, ...props }: DayProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <DayButtonContainer
      ref={buttonRef}
      variant="ghost"
      active={active}
      dayValidation={validation}
      css={{
        maxWidth: '37px',
        width: '100%',
      }}
      {...props}
    >
      {children}
    </DayButtonContainer>
  );
}

export default Day;
