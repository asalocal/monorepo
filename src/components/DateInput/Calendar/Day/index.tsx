import { ButtonHTMLAttributes } from 'react';
import { DayButtonContainer } from './styles';

interface DayProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  active: boolean;
  validation: boolean;
}

function Day({ children, active, validation, ...props }: DayProps) {
  return (
    <>
      <DayButtonContainer
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
    </>
  );
}

export default Day;
