import React from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  target?: HTMLElement;
  children: React.ReactNode;
}

function Portal({
  target = document.querySelector('#portal') as HTMLElement,
  children,
}: PortalProps) {
  return ReactDOM.createPortal(children, target);
}

export default Portal;
