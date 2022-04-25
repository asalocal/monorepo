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
  x: number;
  y: number;
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
  const [positions, setPositions] = useState<IPositions>({} as IPositions);
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
  } = useSelect();

  const { fieldName, registerField } = useField(name);

  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (children) {
      handleSelected(children[0].props.children);
      handleOption(children[0].props.value);
    }
  }, [children]);

  useLayoutEffectSSR(() => {
    if (triggerRef.current) {
      setPositions({
        x: triggerRef.current.getBoundingClientRect().x,
        y: triggerRef.current.getBoundingClientRect().y,
        width: triggerRef.current.getBoundingClientRect().width,
      });
    }
  }, [triggerRef, isOpen]);

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
    <Flex direction="column">
      <SelectWrapper
        variant={variant}
        type="button"
        ref={triggerRef}
        active={active}
        onClick={handleOpen}
      >
        {selected}
        <OpenIcon isOpen={isOpen}>
          <TriangleDownIcon />
        </OpenIcon>
      </SelectWrapper>
      <Portal>
        {isOpen && (
          <Overlay onClick={handleOpen}>
            <OptionsContainer
              css={{
                transform: `translate(${positions.x}px, ${positions.y}px)`,
                minWidth: positions.width,
              }}
              isSelecting={isOpen}
            >
              {children &&
                children.map(({ props }) => (
                  <Option
                    data-value={props.value}
                    key={props.value}
                    value={props.value}
                    onClick={() => handleSelect(props.value)}
                    css={{
                      minWidth: positions.width,
                    }}
                  >
                    {props.children}
                  </Option>
                ))}
            </OptionsContainer>
          </Overlay>
        )}
      </Portal>
      <input type="hidden" ref={inputRef} value={option} {...props} />
    </Flex>
  );
}

export default Select;
