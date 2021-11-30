import { ChangeEvent, RefObject, useCallback, useState } from 'react';

export interface IUseRadioProps {
  id?: string;

  name?: string;

  value?: string | number;

  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

function useRadio(props: IUseRadioProps, ref: RefObject<HTMLInputElement>) {
  const { id, name, value: controlledValue, onChange } = props;

  const [checked, setChecked] = useState(false);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (ref.current) {
        if (event.target.dataset.value === controlledValue) {
          setChecked(ref.current.checked);
        }
      }
    },
    [controlledValue, ref]
  );

  const getInputProps = useCallback(() => {
    return {
      checked,
      id,
      name,
      type: 'radio',
      value: controlledValue,
    };
  }, [checked, controlledValue, id, name]);

  return {
    getInputProps,
    checked,
    onChange: handleChange,
  };
}
export default useRadio;
