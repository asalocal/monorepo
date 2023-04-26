import { forwardRef } from 'react';
import { BYTCSS } from '@kaiju-ui/theme';
import { TextContainer } from './styles';
interface TextProps {
  as?:
    | 'span'
    | 'p'
    | 'strong'
    | 'label'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6';
  color?: string;
  fontWeight?:
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
    | 'regular'
    | 'bold'
    | 'light';
  children: React.ReactNode;
  css?: BYTCSS;
}

const Text = forwardRef(
  (
    {
      as = 'span',
      color = 'inherit',
      css,
      fontWeight,
      children,
      ...props
    }: TextProps,
    ref
  ) => {
    const textCSS = {
      fontWeight: fontWeight || 'regular',
      color,
      ...css,
    };
    return (
      <>
        <TextContainer as={as} css={textCSS} {...props}>
          {children}
        </TextContainer>
      </>
    );
  }
);

export default Text;
