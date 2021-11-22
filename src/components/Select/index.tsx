import { useField } from '@unform/core';
import { TriangleDownIcon, TriangleUpIcon } from '@modulz/radix-icons';
import {
  useEffect,
  useState,
  InputHTMLAttributes,
  useRef,
  RefObject,
} from 'react';
import {
  SelectWrapper,
  OptionsContainer,
  Option,
  SelectContainer,
} from './styles';

interface IOption {
  label: string;
  value: number;
}

interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  options: IOption[];
  name: string;
}

function Select({ options, name, ...props }: SelectProps) {
  const [selected, setSelected] = useState(options[0].label);
  const [optionsItem, setOptionsItem] = useState<IOption[]>([]);
  const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    setOptionsItem(options);
  }, [options]);

  function handleOpen() {
    setIsOpen(!isOpen);
    setActive(!active);
  }

  function handleSelect(label: string) {
    setSelected(label);
    setIsOpen(false);
    setActive(!active);
  }

  useEffect(() => {
    if (inputRef.current) {
      registerField({
        name: fieldName,
        ref: inputRef,
        getValue: (ref: RefObject<HTMLInputElement>) =>
          ref.current ? ref.current.value : '',
        setValue: (ref: RefObject<HTMLInputElement>, value: string) =>
          ref.current ? (ref.current.value = value) : value,
        clearValue: (ref: RefObject<HTMLInputElement>) =>
          ref.current ? (ref.current.value = '') : '',
      });
    }
  }, [fieldName, registerField]);

  return (
    <>
      <SelectContainer>
        <SelectWrapper type="button" active={active} onClick={handleOpen}>
          {selected} {isOpen ? <TriangleUpIcon /> : <TriangleDownIcon />}
        </SelectWrapper>
        <OptionsContainer isSelecting={isOpen}>
          {optionsItem.map(({ label, value }) => (
            <Option
              data-value={value}
              key={value}
              onClick={() => handleSelect(label)}
            >
              {label}
            </Option>
          ))}
        </OptionsContainer>
        <input type="hidden" ref={inputRef} value={selected} {...props} />
      </SelectContainer>
    </>
  );
}

export default Select;
