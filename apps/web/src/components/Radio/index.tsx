import { useField } from '@unform/core';
import Flex from 'components/Flex';
import {
  InputHTMLAttributes,
  MouseEvent,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import generateHash from 'utils/generateHash';
import { useRadioGroup } from './context/RadioContext';
import { InputHidden, Label, RadioChecked, RadioInput } from './styles';

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  value: string | number;
  isChecked?: boolean;
}

const Radio = ({
  label,
  name,
  isChecked = false,
  value,
  ...props
}: RadioProps) => {
  const [generatedId, setGeneratedId] = useState('');

  const radioRef = useRef<HTMLInputElement>(null);

  const { radioActive, handleRadioActive } = useRadioGroup();
  const { fieldName, registerField } = useField(name);

  const handleClick = (ev: MouseEvent<HTMLDivElement>) => {
    if (radioRef.current) {
      radioRef.current.checked = true;
      handleRadioActive(radioRef.current.value);
    }
  };

  useEffect(() => {
    if (radioRef.current) {
      registerField({
        name: fieldName,
        ref: radioRef,
        getValue: (ref: RefObject<HTMLInputElement>) => {
          if (ref.current) {
            if (ref.current.checked === true) {
              return ref.current.value;
            }

            return '';
          }
          return '';
        },
        setValue: (ref: RefObject<HTMLInputElement>, value: string) => {
          if (ref.current) {
            if (ref.current.checked) {
              return (ref.current.value = value);
            }
            return value;
          }
          return value;
        },
        clearValue: (ref: RefObject<HTMLInputElement>) =>
          ref.current ? (ref.current.value = '') : '',
      });
    }
  }, [fieldName, registerField]);

  useEffect(() => {
    const id = `radio-${generateHash()}-${name}`;
    setGeneratedId(id);
  }, [name]);

  return (
    <Flex alignItems="center">
      <InputHidden
        {...props}
        type="radio"
        ref={radioRef}
        data-checked="false"
        data-value={value}
        name={name}
        value={value}
      />
      <RadioInput onClick={(ev) => handleClick(ev)} id={generatedId}>
        {radioActive === value && <RadioChecked />}
      </RadioInput>
      <Label htmlFor={generatedId}>{label}</Label>
    </Flex>
  );
};

export default Radio;
