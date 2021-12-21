import { forwardRef } from 'react';
import { TextContainer } from './styles';
interface TextProps {
  as: 'span' | 'p' | 'label' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: string;
  children: React.ReactNode;
  css?: Record<string, any>;
}

const Text = forwardRef(
  (
    { as = 'span', color = '#000', css, children, ...props }: TextProps,
    ref
  ) => {
    return (
      <>
        <TextContainer as={as} css={css} {...props}>
          {children}
        </TextContainer>
      </>
    );
  }
);

export default Text;
