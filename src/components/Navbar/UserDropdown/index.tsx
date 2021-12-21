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
  const { user, signOut } = useAuth();

  const { id } = user;

  return (
    <Dropdown label={<UserInfo name={user.name} />}>
      <Content>
        <DropdownLink href="/my-trips">My trips</DropdownLink>
        <DropdownLink href="/logout">Info</DropdownLink>
        <UserDataContainer css={{ marginTop: '10px' }}>
          <DropdownLink css={{ borderRadius: '50%' }} href={`/profile/${id}`}>
            <PersonIcon />
          </DropdownLink>
          <DropdownLink css={{ borderRadius: '50%' }} href="/settings">
            <MixerHorizontalIcon />
          </DropdownLink>
          <DropdownLink
            css={{ borderRadius: '50%' }}
            href="/"
            onClick={() => signOut()}
          >
            <ExitIcon />
          </DropdownLink>
        </UserDataContainer>
      </Content>
    </Dropdown>
  );
}

export default UserDropdown;
