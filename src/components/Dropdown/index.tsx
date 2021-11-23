import { useCallback, useEffect, useRef, useState } from 'react';
import { DropdownContainer, DropdownTrigger } from './styles';

import DropdownContent from './DropdownContent';
import { BYTCSS } from 'styles/Theme.provider';

interface DropdownProps {
  label: string | JSX.Element;
  children: React.ReactNode;
  css?: BYTCSS;
}

function Dropdown({ label, children, css }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [active, setIsActive] = useState(false);

  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleOpenDropdown = useCallback(() => {
    setIsOpen((prevState) => !prevState);
    setIsActive((prevState) => !prevState);
  }, []);

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      const heightCalculated =
        triggerRef.current?.getBoundingClientRect().y +
          triggerRef.current?.getBoundingClientRect().height || 0;
      const leftPosition = triggerRef.current?.getBoundingClientRect().x || 0;

      setPositionX(leftPosition);
      setPositionY(heightCalculated);
    }
  }, [isOpen]);

  return (
    <DropdownContainer css={css}>
      <DropdownTrigger
        ref={triggerRef}
        onClick={handleOpenDropdown}
        active={active}
      >
        {label}
      </DropdownTrigger>
      {isOpen && (
        <DropdownContent xPosition={positionX} yPosition={positionY}>
          {children}
        </DropdownContent>
      )}
    </DropdownContainer>
  );
}

export default Dropdown;
