import {
  ToastBottomContainer,
  ToastContainer,
  ToastLeftContainer,
  ToastRightContainer,
} from './styles';
import ToastItem from './ToastItem';

export interface ToastMessage {
  id: string;
  title: string;
  message?: string;
  type?: 'success' | 'error';
  position?: 'bottom' | 'left' | 'right';
}

export interface ToastMessagesProps {
  messages: ToastMessage[];
}

function Toast({ messages }: ToastMessagesProps) {
  return (
    <>
      <ToastBottomContainer>
        {messages
          .filter((message) => message.position === 'bottom')
          .map((item) => (
            <ToastItem
              key={item.id}
              id={item.id}
              position={item.position}
              message={item.message}
              title={item.title}
              type={item.type}
            ></ToastItem>
          ))}
      </ToastBottomContainer>

      <ToastLeftContainer>
        {messages
          .filter((message) => message.position === 'left')
          .map((item) => (
            <ToastItem
              key={item.id}
              id={item.id}
              position={item.position}
              message={item.message}
              title={item.title}
              type={item.type}
            ></ToastItem>
          ))}
      </ToastLeftContainer>

      <ToastRightContainer>
        {messages
          .filter((message) => message.position === 'right')
          .map((item) => (
            <ToastItem
              key={item.id}
              id={item.id}
              position={item.position}
              message={item.message}
              title={item.title}
              type={item.type}
            ></ToastItem>
          ))}
      </ToastRightContainer>
    </>
  );
}

export default Toast;
