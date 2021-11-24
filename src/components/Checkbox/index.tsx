import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { CheckboxBox, CheckboxContainer, CheckboxLabel } from './styles';
import { CheckIcon } from '@modulz/radix-icons';
import { useField } from '@unform/core';
interface CheckboxProps {
  children: React.ReactNode;
  name: string;
}

function Checkbox({ children, name, ...props }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleCheck = useCallback(() => {
    const checkboxValue = !isChecked;
    setIsChecked(checkboxValue);

    if (checkboxRef.current) {
      checkboxRef.current.checked = checkboxValue ? true : false;
    }
  }, [isChecked, checkboxRef]);

  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    if (checkboxRef.current) {
      registerField({
        name: fieldName,
        ref: checkboxRef,
        getValue: (ref: RefObject<HTMLInputElement>) =>
          ref.current ? ref.current.checked : false,
        setValue: (ref: RefObject<HTMLInputElement>, value: boolean) =>
          ref.current ? (ref.current.checked = value) : value,
        clearValue: (ref: RefObject<HTMLInputElement>) =>
          ref.current ? (ref.current.checked = false) : false,
      });
    }
  }, [fieldName, registerField]);

  return (
    <>
      <CheckboxContainer type="button" onClick={handleCheck}>
        <CheckboxBox isChecked={isChecked}>
          {isChecked && <CheckIcon />}
        </CheckboxBox>
        <CheckboxLabel>{children}</CheckboxLabel>
      </CheckboxContainer>
      <input
        type="checkbox"
        style={{ display: 'none' }}
        ref={checkboxRef}
        name={name}
        {...props}
      />
    </>
  );
}

export default Checkbox;
