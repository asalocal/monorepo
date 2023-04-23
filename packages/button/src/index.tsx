import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from "react";
import { BYTCSS } from "@kaiju-ui/theme";
import { ButtonVariants, Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "alternative" | "ghost";
  css?: BYTCSS;
} & ButtonVariants;

const Button = forwardRef(
  (
    {
      children,
      loading = false,
      disabled = false,
      variant = "primary",
      css,
      ...rest
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <Container
        ref={ref}
        disabled={loading || disabled}
        loading={loading}
        variant={variant}
        css={css}
        {...rest}
      >
        {loading ? "Loading..." : children}
      </Container>
    );
  }
);

export default Button;
