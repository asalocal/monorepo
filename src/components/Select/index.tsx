import { TriangleDownIcon } from '@modulz/radix-icons';
import { useEffect, useState } from 'react';
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

interface SelectProps {
  options: IOption[];
}

function Select({ options }: SelectProps) {
  const [selected, setSelected] = useState(options[0].label);
  const [optionsItem, setOptionsItem] = useState<IOption[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setOptionsItem(options);
  }, [options]);

  function handleSelect(label: string) {
    setSelected(label);
    setIsOpen(false);
  }

  return (
    <SelectContainer>
      <SelectWrapper onClick={() => setIsOpen((prevState) => !prevState)}>
        {selected} <TriangleDownIcon />
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
    </SelectContainer>
  );
}

export default Select;
