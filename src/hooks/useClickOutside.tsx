import { useEffect } from 'react';

interface IUseClickOutside {
  component: HTMLElement;
  event: string;
  callback: () => void;
}

function useClickOuside({ component, event, callback }: IUseClickOutside) {
  useEffect(() => {
    const listener = (ev: any) => {
      if (!component.contains(ev.target)) {
        callback();
      }
    };

    document.addEventListener(event, listener);

    return () => {
      document.removeEventListener(event, listener);
    };
  }, [component]);
}

export default useClickOuside;
