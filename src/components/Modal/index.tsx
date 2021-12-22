import Flex from 'components/Flex';
import Overlay from 'components/Overlay';
import { useModal } from 'context/ModalProvider';
import Portal from '../Portal';

interface ModalProps {
  children: React.ReactNode;
}

function Modal({ children }: ModalProps) {
  const { isOpen } = useModal();

  return !isOpen ? (
    <></>
  ) : (
    <Portal>
      <Overlay visible>
        <Flex
          alignItems="center"
          justifyContent="center"
          css={{
            width: '100%',
            height: '100%',
          }}
        >
          {children}
        </Flex>
      </Overlay>
    </Portal>
  );
}

export default Modal;
