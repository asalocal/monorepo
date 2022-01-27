import Flex from 'components/Flex';
import Overlay from 'components/Overlay';
import { useState, useEffect } from 'react';
import Portal from '../Portal';

interface ModalProps {
  children: React.ReactNode;
  onHide?: () => void;
  isOpen: boolean;
}

function Modal({ children, isOpen, onHide }: ModalProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    open && (
      <Portal>
        <Overlay visible>
          <Flex
            alignItems="center"
            justifyContent="center"
            css={{
              width: '100%',
              height: '100%',
            }}
            onClick={() => {
              onHide && onHide();
            }}
          >
            {children}
          </Flex>
        </Overlay>
      </Portal>
    )
  );
}

export default Modal;
