import Portal from 'components/Portal';
import { HTMLAttributes } from 'react';
import { DropdownContentContainer } from './styles';

interface DropdownContentProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  xPosition: number;
  yPosition: number;
}

function DropdownContent({
  children,
  xPosition,
  yPosition,
  ...props
}: DropdownContentProps) {
  return (
    <Portal target={document.querySelector('#portal') as HTMLDivElement}>
      <DropdownContentContainer
        css={{
          left: xPosition,
          top: yPosition,
        }}
        {...props}
      >
        {children}
      </DropdownContentContainer>
    </Portal>
  );
}

export default DropdownContent;
