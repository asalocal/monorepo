import { ButtonHTMLAttributes } from 'react';
import { DayButtonContainer } from './styles';

interface DayProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  active: boolean;
}

function Day({ children, active, ...props }: DayProps) {
  return (
    <>
      <DayButtonContainer
        variant="ghost"
        active={active}
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
