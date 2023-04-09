import { useEffect } from 'react';

function useSignUpReferences(
  component: HTMLElement | null,
  setState: React.Dispatch<React.SetStateAction<HTMLElement[]>>
) {
  useEffect(() => {
    if (component) setState((prevState) => [...prevState, component]);
  }, [component]);

  return;
}

export default useSignUpReferences;
