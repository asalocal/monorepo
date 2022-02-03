import { IconBaseProps } from 'react-icons';

interface IIconProps {
  icon: React.ComponentType<IconBaseProps>;
  onClick?: () => void;
}

function Icon({ icon: Icon, ...rest }: IIconProps) {
  return <>{Icon && <Icon {...rest} />}</>;
}

export default Icon;
