import { ButtonHTMLAttributes } from 'react';
import { BYTCSS } from 'styles/Theme.provider';
import { ButtonVariants, Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'alternative' | 'ghost';
  css?: BYTCSS;
} & ButtonVariants;

function Button({
  children,
  loading = false,
  disabled = false,
  variant = 'primary',
  css,
  ...rest
}: ButtonProps) {
  return (
    <Container
      disabled={loading || disabled}
      loading={loading}
      variant={variant}
      css={css}
      {...rest}
    >
      {loading ? 'Loading...' : children}
    </Container>
  );
}

export default Button;
