import { useState } from 'react';
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
  const [active, setIsActive] = useState(false);

  const handleOpenDropdown = () => {
    setIsOpen(!isOpen);
    setIsActive(!active);
  };

  return (
    <DropdownContainer css={css}>
      <DropdownTrigger onClick={handleOpenDropdown} active={active}>
        {label}
      </DropdownTrigger>
      {isOpen && <DropdownContent>{children}</DropdownContent>}
    </DropdownContainer>
  );
}

export default Dropdown;
