import {
  ChevronRightIcon,
  ChevronLeftIcon,
  HomeIcon,
  SewingPinFilledIcon,
  SewingPinIcon,
} from '@modulz/radix-icons';
import Icon from 'components/Icon';
import { useMemo } from 'react';
import Logo from '../../assets/logo.svg';
import LogoIcon from '../../assets/icon.svg';
import NavItem from './NavItem';
import { Container, LogoContainer, NavContainer } from './styles';

import { useNavbar } from 'context/NavbarContext';

function Navbar() {
  const { handleNavbarVisibility, navbarVisibility } = useNavbar();

  const showNavbarVisibility = useMemo(
    () => (navbarVisibility ? ChevronRightIcon : ChevronLeftIcon),
    [navbarVisibility]
  );
  return (
    <Container hidden={navbarVisibility}>
      <Icon onClick={handleNavbarVisibility} icon={showNavbarVisibility} />
      <LogoContainer>
        <img
          src={navbarVisibility ? LogoIcon : Logo}
          alt="Logo Build Your Trip"
        />
      </LogoContainer>

      <NavContainer>
        <NavItem to="#" icon={HomeIcon}>
          Home
        </NavItem>
        <NavItem to="/trips" icon={SewingPinFilledIcon}>
          Your Trips
        </NavItem>
        <NavItem to="/trips/create" icon={SewingPinIcon}>
          Create a Trip
        </NavItem>
      </NavContainer>
    </Container>
  );
}

export default Navbar;
