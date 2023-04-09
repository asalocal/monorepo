import { ChevronRightIcon, ChevronLeftIcon } from '@modulz/radix-icons';
import Icon from 'components/Icon';
import { useEffect, useMemo, useState } from 'react';
import NavItem from './NavItem';
import {
  Container,
  LogoContainer,
  NavContainer,
  WrapperContainer,
} from './styles';

import { useNavbar } from 'context/NavbarContext';
import { useAuth } from 'context/AuthContext';
import UserDropdown from './UserDropdown';
import HamburguerMenu from './HamburguerMenu';
import Text from 'components/Text';
import Logo from 'components/Logo';

interface NavbarProps {
  orientation?: 'horizontal' | 'vertical';
  backgroundColor?: 'primary' | 'transparent';
  staticMenu?: boolean;
}

function Navbar({
  orientation = 'horizontal',
  backgroundColor = 'primary',
  staticMenu = false,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const { handleNavbarVisibility, navbarVisibility } = useNavbar();
  const { user } = useAuth();

  const showNavbarVisibility = useMemo(
    () => (navbarVisibility ? ChevronRightIcon : ChevronLeftIcon),
    [navbarVisibility]
  );

  useEffect(() => {
    if (window && window.scrollY > 320) return setScrolled(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 320) {
        setScrolled(true);
        return;
      }

      setScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container staticMenu={staticMenu} scrolled={scrolled}>
      <WrapperContainer
        orientation={orientation}
        background={backgroundColor}
        hidden={navbarVisibility}
      >
        {orientation === 'vertical' && (
          <Icon onClick={handleNavbarVisibility} icon={showNavbarVisibility} />
        )}
        <LogoContainer orientation={orientation}>
          <a href="/">
            <Logo />
          </a>
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

          {user.id ? (
            <UserDropdown />
          ) : (
            <NavItem
              orientation="horizontal"
              type="primary"
              to="/signup?soft=true"
              css={
                scrolled
                  ? {
                      border: '1px solid $primary',

                      '&:hover': {
                        backgroundColor: '$primary',
                        color: '$background',
                      },
                    }
                  : {}
              }
            >
              Sign Up
            </NavItem>
          )}
        </NavContainer>
      </WrapperContainer>
    </Container>
  );
}

export default Navbar;
