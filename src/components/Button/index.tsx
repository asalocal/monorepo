import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, ...rest }: ButtonProps) {
  return <Container {...rest}>{children}</Container>;
}

export default Button;
