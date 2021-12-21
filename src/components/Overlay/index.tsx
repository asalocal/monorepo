import { HTMLAttributes } from 'react';
import { OverlayContainer } from './styles';

interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  visible?: boolean;
}

function Overlay({ children, visible = false, ...props }: OverlayProps) {
  return (
    <>
      <OverlayContainer
        css={{
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
