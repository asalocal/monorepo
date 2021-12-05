import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  target?: HTMLElement | null;
  children: React.ReactNode;
}

function Portal({ target = null, children }: PortalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);
  return mounted
    ? ReactDOM.createPortal(
        children,
        document.querySelector('#portal') as HTMLDivElement
      )
    : null;
}

export default Portal;
