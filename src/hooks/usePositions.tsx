import { useLayoutEffectSSR } from 'components/system/useLayoutEffect';
import { useState } from 'react';

interface Positions {
  x: number;
  y: number;
}

interface IUsePositions {
  component: HTMLElement;
  callback: (positions: Positions) => void;
}

function usePositions({ component, callback }: IUsePositions) {
  const [positions, setPositions] = useState<Positions>({} as Positions);

  useLayoutEffectSSR(() => {
    const data = component?.getBoundingClientRect();

    callback({ x: data?.x, y: data?.y });

    setPositions({
      x: data?.x,
      y: data?.y,
    });
  }, [callback, component]);

  return [positions];
}

export default usePositions;
