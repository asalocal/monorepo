import { ButtonHTMLAttributes, MouseEvent, useState } from 'react';
import {
  Container,
  BottomLineMenu,
  MiddleLineMenu,
  TopLineMenu,
} from './styles';

interface HamburguerMenuProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (ev: MouseEvent<HTMLButtonElement>) => void;
}

function HamburguerMenu({ onClick, ...props }: HamburguerMenuProps) {
  const [open, setIsOpen] = useState(false);

  function handleClick(ev: MouseEvent<HTMLButtonElement>) {
    setIsOpen(!open);

    onClick && onClick(ev);
  }

  return (
    <Container onClick={handleClick} {...props}>
      <TopLineMenu open={open} />
      <MiddleLineMenu open={open} />
      <BottomLineMenu open={open} />
    </Container>
  );
}

export default HamburguerMenu;
