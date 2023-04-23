import { HTMLAttributes } from 'react';
import { BYTCSS } from '@kaiju-ui/theme';
import { OverlayContainer } from './styles';

interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  visible?: boolean;
  css?: BYTCSS;
}

function Overlay({ children, visible = false, css, ...props }: OverlayProps) {
  return (
    <>
      <OverlayContainer
        css={{
          ...css,
          backgroundColor: visible ? 'rgba(0, 0, 0, 0.2)' : 'transparent',
        }}
        {...props}
      >
        {children}
      </OverlayContainer>
    </>
  );
}

export default Overlay;
