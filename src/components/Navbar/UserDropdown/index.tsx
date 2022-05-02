import { PersonIcon, ExitIcon, MixerHorizontalIcon } from '@modulz/radix-icons';
import Dropdown from 'components/Dropdown';
import Icon from 'components/Icon';
import { useAuth, User } from 'context/AuthContext';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';
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
  const [data, setData] = useState<User>({} as User);
  const { user, signOut, getData } = useAuth();

  const { push } = useRouter();
  const { id, username } = user;

  const usernameQuery = username ? `${username}` : id;

  const handleSettingsClick = async () => {
    if (user.isIncomplete) {
      const getUserData = await getData();

      const userString = getUserData?.username
        ? getUserData.username
        : getUserData.id;

      push(`/settings/${userString}`);

      return;
    }

    push(`/settings/${usernameQuery}`);
  };

  useEffect(() => {
    async function getUserData() {
      if (user.isIncomplete) {
        const userData = await getData();
        return setData(userData);
      }

      setData(user);
    }

    getUserData();
  }, [getData, user]);

  return (
    <Dropdown label={<UserInfo name={data.name || 'Client'} />}>
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
            onClick={handleSettingsClick}
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
