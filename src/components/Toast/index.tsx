import { ToastContainer } from './styles';
import ToastItem from './ToastItem';

export interface ToastMessage {
  id: string;
  title: string;
  message?: string;
  type?: 'success' | 'error';
}

export interface ToastMessagesProps {
  messages: ToastMessage[];
}

function Toast({ messages }: ToastMessagesProps) {
  return (
    <ToastContainer>
      {messages &&
        messages.map((message) => (
          <ToastItem
            key={message.id}
            id={message.id}
            message={message.message}
            title={message.title}
            type={message.type}
          ></ToastItem>
        ))}
    </ToastContainer>
  );
}

export default Toast;
