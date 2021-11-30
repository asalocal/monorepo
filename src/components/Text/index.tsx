import { forwardRef } from 'react';
interface TextProps {
  as: 'span' | 'p' | 'label' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  fontWeight?:
    | 'bold'
    | 'normal'
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900;
  color?: string;
  children: React.ReactNode;
  css?: Record<string, any>;
}

const Text = forwardRef(
  ({ as, fontWeight, color = '#000', css, children }: TextProps, ref) => {
    const Component = as || 'span';

    return (
      <>
        <Component
          style={{
            fontWeight,
            color,
            ...css,
          }}
        >
          {children}
        </Component>
      </>
    );
  }
);

export default Text;
