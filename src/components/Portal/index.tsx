import React from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  target: HTMLElement;
  children: React.ReactNode;
}

function Portal({ target, children }: PortalProps) {
  return ReactDOM.createPortal(children, target);
}

export default Portal;
