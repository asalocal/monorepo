import { FiX } from 'react-icons/fi';
import { useToast } from 'context/ToastContext';
import { useEffect } from 'react';
import { ToastItemContainer, ToastItemVariants } from './styles';
import Flex from 'components/Flex';
interface ToastItemProps extends ToastItemVariants {
  message?: string;
  title: string;
  id: string;
  type?: 'success' | 'error';
  position?: 'bottom' | 'left' | 'right';
}

function ToastItem({
  message,
  title,
  id,
  type = 'success',
  position = 'right',
}: ToastItemProps) {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 4000);

    return () => clearTimeout(timer);
  }, [id, removeToast]);

  return (
    <>
      <ToastItemContainer position={position} type={type}>
        <Flex justifyContent="spaceBetween">
          <Flex direction="column" css={{ marginRight: '10px' }}>
            {title && <strong>{title}</strong>}
            {message && <p>{message}</p>}
          </Flex>
          <Flex
            css={{
              svg: {
                '&:hover': {
                  cursor: 'pointer',
                },
              },
            }}
          >
            <FiX onClick={() => removeToast(id)} />
          </Flex>
        </Flex>
      </ToastItemContainer>
    </>
  );
}

export default ToastItem;
