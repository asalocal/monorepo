import { useEffect } from 'react';

function useHandleScroll(callback: (ev: any) => void) {
  useEffect(() => {
    document.addEventListener('scroll', callback);

    return () => {
      document.removeEventListener('scroll', callback);
    };
  }, [callback]);
}

export default useHandleScroll;
