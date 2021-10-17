import { IconProps } from '@modulz/radix-icons/dist/types';

interface IIconProps {
  icon: (props: IconProps) => JSX.Element;
  onClick?: () => void;
}

function Icon({ icon: Icon, ...rest }: IIconProps) {
  return <>{Icon && <Icon {...rest} />}</>;
}

export default Icon;
