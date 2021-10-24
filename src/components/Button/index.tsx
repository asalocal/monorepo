import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

function Button({ children, loading = false, ...rest }: ButtonProps) {
  return (
    <Container disabled={loading} loading={loading} {...rest}>
      {loading ? 'Loading...' : children}
    </Container>
  );
}

export default Button;
