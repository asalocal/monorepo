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

  const { id, username } = user;

  const usernameQuery = username ? `@${username}` : id;

  return (
    <Dropdown label={<UserInfo name={user.name} />}>
      <Content>
        <DropdownLink href="/my-trips">My trips</DropdownLink>
        <DropdownLink href="/logout">Info</DropdownLink>
        <UserDataContainer css={{ marginTop: '10px' }}>
          <DropdownLink
            css={{ borderRadius: '50%' }}
            href={`/profile/${usernameQuery}`}
          >
            <PersonIcon />
          </DropdownLink>
          <DropdownLink
            css={{ borderRadius: '50%' }}
            href={`/settings/${usernameQuery}`}
          >
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
