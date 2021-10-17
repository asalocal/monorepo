import { useCallback, useState } from 'react';
import { CheckboxBox, CheckboxContainer, CheckboxLabel } from './styles';
import { CheckIcon } from '@modulz/radix-icons';
interface CheckboxProps {
  children: React.ReactNode;
}

function Checkbox({ children, ...props }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = useCallback(() => {
    setIsChecked(!isChecked);
  }, [isChecked]);

  return (
    <>
      <CheckboxContainer onClick={handleCheck}>
        <CheckboxBox isChecked={isChecked}>
          {isChecked && <CheckIcon />}
        </CheckboxBox>
        <CheckboxLabel>{children}</CheckboxLabel>
      </CheckboxContainer>
    </>
  );
}

export default Checkbox;
