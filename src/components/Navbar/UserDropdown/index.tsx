import { PersonIcon, ExitIcon, MixerHorizontalIcon } from '@modulz/radix-icons';
import Dropdown from 'components/Dropdown';
import Icon from 'components/Icon';
import { useAuth } from 'context/AuthContext';
import {
  DropdownLink,
  UserInfoContainer,
  UserDataContainer,
  Content,
} from './styles';

function UserInfo({ name }: { name: string }) {
  return (
    <UserInfoContainer>
      <Icon icon={PersonIcon} />
      {name}
    </UserInfoContainer>
  );
}

function UserDropdown() {
  const { user } = useAuth();

  return (
    <Dropdown label={UserInfo({ name: user.name })}>
      <Content>
        <DropdownLink to="/my-trips">My trips</DropdownLink>
        <DropdownLink to="/logout">Info</DropdownLink>
        <UserDataContainer>
          <DropdownLink to="/profile">
            <PersonIcon />
          </DropdownLink>
          <DropdownLink to="/settings">
            <MixerHorizontalIcon />
          </DropdownLink>
          <DropdownLink to="/logout">
            <ExitIcon />
          </DropdownLink>
        </UserDataContainer>
      </Content>
    </Dropdown>
  );
}

export default UserDropdown;
