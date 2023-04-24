import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { CheckboxBox, CheckboxContainer, CheckboxLabel } from './styles';
import { CheckIcon } from '@modulz/radix-icons';
import { BYTCSS } from '@kaiju-ui/theme';

interface CheckboxProps {
  children: React.ReactNode;
  name: string;
  css?: BYTCSS;
}

function Checkbox({ children, name, css, ...props }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleCheck = useCallback(() => {
    const checkboxValue = !isChecked;
    setIsChecked(checkboxValue);

    if (checkboxRef.current) {
      checkboxRef.current.checked = checkboxValue ? true : false;
    }
  }, [isChecked, checkboxRef]);

  return (
    <>
      <CheckboxContainer css={css} type="button" onClick={handleCheck}>
        <CheckboxBox isChecked={isChecked}>
          {isChecked && <CheckIcon />}
        </CheckboxBox>
        <CheckboxLabel>{children}</CheckboxLabel>
        <input
          type="checkbox"
          style={{ display: 'none' }}
          ref={checkboxRef}
          name={name}
          {...props}
        />
      </CheckboxContainer>
    </>
  );
}

export default Checkbox;
