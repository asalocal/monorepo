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
import { Fields, useRadioGroup } from './context/RadioContext';
import { Label, RadioChecked, RadioInput } from './styles';
import useRadio from './useRadio';

type RadioProps = {
  label: string;
  name: string;
  value: string | number;
  isChecked?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Radio = ({
  label,
  name,
  isChecked = false,
  value,
  ...props
}: RadioProps) => {
  const [generatedId, setGeneratedId] = useState('');

  const radioRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField } = useField(name);

  const handleClick = (ev: MouseEvent<HTMLDivElement>) => {
    radioRef.current?.click();
  };

  console.log(radioRef.current?.value);

  useEffect(() => {
    if (radioRef.current) {
      registerField({
        name: fieldName,
        ref: radioRef,
        getValue: (ref: RefObject<HTMLInputElement>) =>
          ref.current ? ref.current.value : '',
        setValue: (ref: RefObject<HTMLInputElement>, value: string) =>
          ref.current ? (ref.current.value = value) : value,
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
      <RadioInput
        {...props}
        ref={radioRef}
        type="radio"
        data-checked="false"
        data-value={value}
        name={name}
        value={value}
        id={generatedId}
      />
      <Label htmlFor={generatedId}>{label}</Label>
    </Flex>
  );
};

export default Radio;
