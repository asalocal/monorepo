import { ChevronRightIcon, ChevronLeftIcon } from '@modulz/radix-icons';
import Icon from 'components/Icon';
import { useCallback, useMemo } from 'react';
import NavItem from './NavItem';
import { Container, LogoContainer, NavContainer } from './styles';

import { useNavbar } from 'context/NavbarContext';
import { useAuth } from 'context/AuthContext';
import UserDropdown from './UserDropdown';
import { useRouter } from 'next/router';

interface NavbarProps {
  orientation?: 'horizontal' | 'vertical';
  backgroundColor?: 'primary' | 'transparent';
}

function Navbar({
  orientation = 'horizontal',
  backgroundColor = 'primary',
}: NavbarProps) {
  const { handleNavbarVisibility, navbarVisibility } = useNavbar();
  const { user } = useAuth();

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
          src={navbarVisibility ? '/assets/icon.svg' : '/assets/logo.svg'}
          alt="Logo Build Your Trip"
        />
      </LogoContainer>

      <NavContainer orientation="horizontal">
        <NavItem orientation="horizontal" type="link" to="/beaguide">
          Be a guide
        </NavItem>
        <NavItem orientation="horizontal" type="link" to="/support">
          Support
        </NavItem>
        <NavItem orientation="horizontal" type="link" to="/faq">
          FAQ
        </NavItem>
        {user ? (
          <UserDropdown />
        ) : (
          <NavItem
            orientation="horizontal"
            type="button"
            to="/signup?soft=true"
          >
            Sign In
          </NavItem>
        )}
      </NavContainer>
    </Container>
  );
}

export default Navbar;
