import Button from 'components/Button';
import Overlay from 'components/Overlay';
import { useState, useEffect, useCallback } from 'react';
import Portal from '../Portal';
import { ModalContainer, ModalHeader } from './styles';

export interface ModalProps {
  children: React.ReactNode;
  onHide?: () => void;
  title: string | React.ReactNode;
  isOpen: boolean;
  onCloseModal?: (handleOpen: (state: boolean) => void) => void;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'middle';
}

function Modal({
  children,
  isOpen,
  title,
  onCloseModal,
  position = 'middle',
  onHide,
}: ModalProps) {
  const [open, setOpen] = useState(false);

  const handleCloseModal = useCallback(() => {
    setOpen(false);

    if (onCloseModal) {
      onCloseModal(setOpen);
    }
  }, [onCloseModal]);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <>
      {open && (
        <Portal>
          <Overlay visible>
            <ModalContainer
              position={position}
              direction="column"
              onClick={() => {
                onHide && onHide();
              }}
            >
              <ModalHeader alignItems="center" justifyContent="spaceBetween">
                {title}
                <Button
                  variant="ghost"
                  css={{ width: 'fit-content' }}
                  onClick={handleCloseModal}
                >
                  X
                </Button>
              </ModalHeader>
              {children}
            </ModalContainer>
          </Overlay>
        </Portal>
      )}
    </>
  );
}

export default Modal;
