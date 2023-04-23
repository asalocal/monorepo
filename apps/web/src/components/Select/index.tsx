import { useField } from '@unform/core';
import { TriangleDownIcon, TriangleUpIcon } from '@modulz/radix-icons';
import {
  useEffect,
  useState,
  InputHTMLAttributes,
  useRef,
  RefObject,
} from 'react';
import Overlay from 'components/Overlay';
import { SelectWrapper, OptionsContainer, OpenIcon } from './styles';
import Portal from 'components/Portal';
import Flex from 'components/Flex';

import Option from './Option';
import { useLayoutEffectSSR } from 'components/system/useLayoutEffect';
import { SelectProvider, useSelect } from './SelectContext';
import useClickOutside from 'hooks/useClickOutside';

interface IOption {
  children: React.ReactNode | string;
  value: string | number;
}

interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactElement<IOption>[];
  name: string;
  variant?: 'default' | 'outlined';
}

interface IPositions {
  width: number;
}

function Select({
  children,
  name,
  variant = 'default',
  ...props
}: SelectProps) {
  return (
    <SelectProvider>
      <SelectComponent name={name} variant={variant} {...props}>
        {children}
      </SelectComponent>
    </SelectProvider>
  );
}

function SelectComponent({
  children,
  name,
  variant = 'default',
  ...props
}: SelectProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    active,
    handleOpen,
    handleSelected,
    handleSelect,
    handleOption,
    isOpen,
    option,
    selected,
    setIsOpen,
  } = useSelect();

  const { fieldName, registerField } = useField(name);

  const triggerRef = useRef<HTMLButtonElement>(null);

  useClickOutside({
    component: triggerRef.current as HTMLButtonElement,
    event: 'click',
    callback: () => setIsOpen(false),
  });

  useEffect(() => {
    if (children) {
      handleSelected(children[0].props.children);
      handleOption(children[0].props.value);
    }
  }, []);

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
    <Flex direction="column" css={{ position: 'relative' }}>
      <SelectWrapper
        variant={variant}
        type="button"
        ref={triggerRef}
        active={active}
        onClick={() => handleOpen()}
      >
        {selected}
        <OpenIcon isOpen={isOpen}>
          <TriangleDownIcon />
        </OpenIcon>
      </SelectWrapper>
      {isOpen && (
        <OptionsContainer isSelecting={isOpen}>
          {children &&
            children.map(({ props }) => (
              <Option
                data-value={props.value}
                key={props.value}
                value={props.value}
                onClick={() => handleSelect(props.value)}
              >
                {props.children}
              </Option>
            ))}
        </OptionsContainer>
      )}
      <input type="hidden" ref={inputRef} value={option} {...props} />
    </Flex>
  );
}

export default Select;
