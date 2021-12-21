import { useCallback, useEffect, useRef, useState } from 'react';
import { DropdownContainer, DropdownTrigger } from './styles';

import DropdownContent from './DropdownContent';
import { BYTCSS } from 'styles/Theme.provider';
import { DropdownProvider, useDropdown } from './DropdownContext';

interface DropdownProps {
  label: string | JSX.Element;
  children: React.ReactNode;
  css?: BYTCSS;
}

function Dropdown({ label, children, css }: DropdownProps) {
  return (
    <DropdownProvider>
      <DropdownWrapper label={label} children={children} css={css} />
    </DropdownProvider>
  );
}

function DropdownWrapper({ label, children, css }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { handleSetPositions } = useDropdown();
  const [active, setIsActive] = useState(false);

  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleOpenDropdown = useCallback(() => {
    setIsOpen((prevState) => !prevState);
    setIsActive((prevState) => !prevState);
  }, []);

  useEffect(() => {
    const handleCloseDropdownOnScroll = () => {
      setIsOpen(false);
      setIsActive(false);
    };

    if (isOpen) {
      window.addEventListener('scroll', handleCloseDropdownOnScroll);
    }

    return () =>
      window.removeEventListener('scroll', handleCloseDropdownOnScroll);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      const heightCalculated =
        triggerRef.current?.getBoundingClientRect().y +
          triggerRef.current?.getBoundingClientRect().height || 0;
      const leftPosition = triggerRef.current?.getBoundingClientRect().x || 0;

      handleSetPositions({ x: leftPosition, y: heightCalculated });
    }
  }, [isOpen, handleSetPositions]);

  return (
    <DropdownContainer>
      <DropdownTrigger
        ref={triggerRef}
        onClick={handleOpenDropdown}
        active={active}
      >
        {label}
      </DropdownTrigger>
      {isOpen && (
        <DropdownContent css={css} onHide={handleOpenDropdown}>
          {children}
        </DropdownContent>
      )}
    </DropdownContainer>
  );
}

export default Dropdown;
