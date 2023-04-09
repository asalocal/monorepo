import { useEffect } from 'react';

interface IUseClickOutside {
  component: HTMLElement;
  event: string;
  callback: (event: MouseEvent) => void;
}

function useClickOutside({ component, event, callback }: IUseClickOutside) {
  useEffect(() => {
    const listener = (ev: any) => {
      if (!component?.contains(ev.target)) {
        callback(ev);
      }
    };

    document.addEventListener(event, listener);

    return () => {
      document.removeEventListener(event, listener);
    };
  }, [component]);
}

export default useClickOutside;
