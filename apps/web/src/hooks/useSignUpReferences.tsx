import { useEffect } from 'react';

function useSignUpReferences(
  component: HTMLElement | null,
  setState: React.Dispatch<React.SetStateAction<HTMLElement[]>>
) {
  useEffect(() => {
    if (component) {
      setState((prevState) => {
        const findComponent = prevState.find((el) => component === el);

        if (findComponent) return prevState;

        return [...prevState, component];
      });
    }
  }, [component]);

  return;
}

export default useSignUpReferences;
