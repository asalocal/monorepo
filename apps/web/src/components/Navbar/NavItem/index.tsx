import { IconProps } from '@modulz/radix-icons/dist/types';
import Icon from 'components/Icon';
import { useNavbar } from 'context/NavbarContext';
import { useMemo } from 'react';
import { BYTCSS } from '@kaiju-ui/theme';
import { NavLinkContainer } from './styles';

interface NavItemProps {
  children: React.ReactNode;
  to: string;
  icon?: (props: IconProps) => JSX.Element;
  orientation?: 'horizontal' | 'vertical';
  type?: 'link' | 'button' | 'primary';
  css?: BYTCSS;
}

function NavItem({
  children,
  to,
  icon,
  orientation,
  type = 'button',
  css,
}: NavItemProps) {
  const { navbarVisibility } = useNavbar();

  const handleChangeVisibility = useMemo(
    () => (navbarVisibility ? null : children),
    [navbarVisibility, children]
  );

  return (
    <>
      <NavLinkContainer
        tabIndex={1}
        orientation={orientation}
        visible={navbarVisibility}
        type={type}
        css={css}
        href={to}
      >
        {icon && <Icon icon={icon} />}
        {handleChangeVisibility}
      </NavLinkContainer>
    </>
  );
}

export default NavItem;
