import Portal from 'components/Portal';
import Overlay from 'components/Overlay';
import { HTMLAttributes } from 'react';
import { DropdownContentContainer } from './styles';
import { useDropdown } from '../DropdownContext';
import { BYTCSS } from 'styles/Theme.provider';

interface DropdownContentProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  onHide: () => void;
  css?: BYTCSS;
}

function DropdownContent({
  children,
  onHide,
  css,
  ...props
}: DropdownContentProps) {
  const {
    positions: { x, y },
  } = useDropdown();

  return (
    <Portal target={document.querySelector('#portal') as HTMLDivElement}>
      <Overlay onClick={() => onHide()}>
        <DropdownContentContainer
          css={{
            ...css,
            left: x,
            top: y,
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
