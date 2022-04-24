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
import { SelectWrapper, OptionsContainer, OpenIcon } from './styles';
import Portal from 'components/Portal';
import Flex from 'components/Flex';

import Option from './Option';
import { useLayoutEffectSSR } from 'components/system/useLayoutEffect';

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
  const [selected, setSelected] = useState<string | React.ReactNode>('');
  const [option, setOption] = useState<string | number>('');
  const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [positions, setPositions] = useState<IPositions>({} as IPositions);
  const [show, setShow] = useState(false);
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

  useEffect(() => {
    setShow(true);
  }, []);

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
          ref.current ? ref.current.checked : false,
        setValue: (ref: RefObject<HTMLInputElement>, value: boolean) =>
          ref.current ? (ref.current.checked = value) : value,
        clearValue: (ref: RefObject<HTMLInputElement>) =>
          ref.current ? (ref.current.checked = false) : false,
      });
    }
  }, [fieldName, registerField]);

  useEffect(() => {
    setOption(children[0].props.value);
  }, [children]);

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
