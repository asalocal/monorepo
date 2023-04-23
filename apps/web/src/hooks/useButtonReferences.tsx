import { useState } from 'react';

function useReferences(): [
  HTMLElement[],
  React.Dispatch<React.SetStateAction<HTMLElement[]>>
] {
  const [elements, setElements] = useState<HTMLElement[]>([]);

  return [elements, setElements];
}

export default useReferences;
