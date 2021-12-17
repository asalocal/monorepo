import Portal from 'components/Portal';
import Overlay from 'components/Overlay';
import { HTMLAttributes } from 'react';
import { DropdownContentContainer } from './styles';

interface DropdownContentProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  xPosition: number;
  yPosition: number;
  onHide: () => void;
}

function DropdownContent({
  children,
  xPosition,
  yPosition,
  onHide,
  ...props
}: DropdownContentProps) {
  return (
    <Portal target={document.querySelector('#portal') as HTMLDivElement}>
      <Overlay onClick={() => onHide()}>
        <DropdownContentContainer
          css={{
            left: xPosition,
            top: yPosition,
          }}
          {...props}
        >
          {children}
        </DropdownContentContainer>
      </Overlay>
    </Portal>
  );
}

export default DropdownContent;
