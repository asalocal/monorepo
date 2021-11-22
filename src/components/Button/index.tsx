import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  variant?: 'primary' | 'secondary';
};

function Button({
  children,
  loading = false,
  variant = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <Container disabled={loading} loading={loading} variant={variant} {...rest}>
      {loading ? 'Loading...' : children}
    </Container>
  );
}

export default Button;
