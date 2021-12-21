import { useField } from '@unform/core';
import { TriangleDownIcon, TriangleUpIcon } from '@modulz/radix-icons';
import {
  useEffect,
  useState,
  InputHTMLAttributes,
  useRef,
  RefObject,
  useCallback,
} from 'react';
import Overlay from 'components/Overlay';
import { SelectWrapper, OptionsContainer } from './styles';
import Portal from 'components/Portal';
import Flex from 'components/Flex';

import Option from './Option';

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
}

function Select({
  children,
  name,
  variant = 'default',
  ...props
}: SelectProps) {
  const [selected, setSelected] = useState<string | React.ReactNode>('');
  const [option, setOption] = useState<string | number>('');
  const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [positions, setPositions] = useState<IPositions>({} as IPositions);
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField } = useField(name);

  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleOpen = useCallback(() => {
    setIsOpen(!isOpen);
    setActive(!active);
  }, [isOpen, active]);

  const handleSelect = useCallback((value: string | number) => {
    setSelected(value);
    setOption(value);
    setIsOpen(false);
    setActive((prevState) => !prevState);
  }, []);

  useEffect(() => {
    if (children) {
      setSelected(children[0].props.children);
    }
  }, [children]);

  const handleCloseSelectOnScroll = useCallback(() => {
    setIsOpen(false);
    setActive(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('scroll', handleCloseSelectOnScroll);
    }

    return () =>
      window.removeEventListener('scroll', handleCloseSelectOnScroll);
  }, [isOpen, handleCloseSelectOnScroll]);

  useEffect(() => {
    if (triggerRef.current) {
      setPositions({
        x: triggerRef.current.getBoundingClientRect().x,
        y: triggerRef.current.getBoundingClientRect().y,
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
        {selected} {isOpen ? <TriangleUpIcon /> : <TriangleDownIcon />}
      </SelectWrapper>
      <Portal>
        {isOpen && (
          <Overlay onClick={handleOpen}>
            <OptionsContainer
              css={{
                transform: `translate(${positions.x}px, ${positions.y - 5}px)`,
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
