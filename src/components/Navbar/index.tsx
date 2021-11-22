import { ChevronRightIcon, ChevronLeftIcon } from '@modulz/radix-icons';
import Icon from 'components/Icon';
import { useMemo } from 'react';
import Logo from '../../assets/logo.svg';
import LogoIcon from '../../assets/icon.svg';
import NavItem from './NavItem';
import { Container, LogoContainer, NavContainer } from './styles';

import { useNavbar } from 'context/NavbarContext';
import { IconProps } from '@modulz/radix-icons/dist/types';

export interface NavbarItems {
  to: string;
  label: string;
  type: 'link' | 'button';
  icon?: (props: IconProps) => JSX.Element;
}
interface NavbarProps {
  orientation?: 'horizontal' | 'vertical';
  items: NavbarItems[];
  backgroundColor?: 'primary' | 'transparent';
}

function Navbar({
  orientation = 'horizontal',
  items,
  backgroundColor = 'primary',
}: NavbarProps) {
  const { handleNavbarVisibility, navbarVisibility } = useNavbar();

  const showNavbarVisibility = useMemo(
    () => (navbarVisibility ? ChevronRightIcon : ChevronLeftIcon),
    [navbarVisibility]
  );

  return (
    <Container
      orientation={orientation}
      background={backgroundColor}
      hidden={navbarVisibility}
    >
      {orientation === 'vertical' && (
        <Icon onClick={handleNavbarVisibility} icon={showNavbarVisibility} />
      )}
      <LogoContainer orientation={orientation}>
        <img
          src={navbarVisibility ? LogoIcon : Logo}
          alt="Logo Build Your Trip"
        />
      </LogoContainer>

      <NavContainer orientation="horizontal">
        {items.map(({ to, label, icon, type = 'link' }) => (
          <NavItem
            orientation={orientation}
            key={to}
            type={type}
            to={to}
            icon={icon}
          >
            {label}
          </NavItem>
        ))}
      </NavContainer>
    </Container>
  );
}

export default Navbar;
