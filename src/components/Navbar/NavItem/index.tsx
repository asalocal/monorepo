import { IconProps } from '@modulz/radix-icons/dist/types';
import Icon from 'components/Icon';
import { useNavbar } from 'context/NavbarContext';
import { useMemo } from 'react';
import { NavLinkContainer } from './styles';

interface NavItemProps {
  children: React.ReactNode;
  to: string;
  icon: (props: IconProps) => JSX.Element;
}

function NavItem({ children, to, icon }: NavItemProps) {
  const { navbarVisibility } = useNavbar();

  const handleChangeVisibility = useMemo(
    () => (navbarVisibility ? null : children),
    [navbarVisibility, children]
  );

  return (
    <>
      <NavLinkContainer visible={navbarVisibility} to={to}>
        {icon && <Icon icon={icon} />}
        {handleChangeVisibility}
      </NavLinkContainer>
    </>
  );
}

export default NavItem;
