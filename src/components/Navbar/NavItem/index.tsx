import { IconProps } from '@modulz/radix-icons/dist/types';
import Icon from 'components/Icon';
import { useNavbar } from 'context/NavbarContext';
import { useMemo } from 'react';
import { NavLinkContainer } from './styles';

interface NavItemProps {
  children: React.ReactNode;
  to: string;
  icon?: (props: IconProps) => JSX.Element;
  orientation?: 'horizontal' | 'vertical';
  type?: 'link' | 'button';
}

function NavItem({
  children,
  to,
  icon,
  orientation,
  type = 'button',
}: NavItemProps) {
  const { navbarVisibility } = useNavbar();

  const handleChangeVisibility = useMemo(
    () => (navbarVisibility ? null : children),
    [navbarVisibility, children]
  );

  return (
    <>
      <NavLinkContainer
        orientation={orientation}
        visible={navbarVisibility}
        type={type}
        href={to}
      >
        {handleChangeVisibility}
      </NavLinkContainer>
    </>
  );
}

export default NavItem;
