import { HTMLAttributes } from 'react';
import { OverlayContainer } from './styles';

interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function Overlay({ children, ...props }: OverlayProps) {
  return (
    <>
      <OverlayContainer {...props}>{children}</OverlayContainer>
    </>
  );
}

export default Overlay;
