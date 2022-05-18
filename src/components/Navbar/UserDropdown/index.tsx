import { PersonIcon, ExitIcon, MixerHorizontalIcon } from '@modulz/radix-icons';
import api from 'api/api';
import Dropdown from 'components/Dropdown';
import Icon from 'components/Icon';
import { useAuth, User } from 'context/AuthContext';
import { getToken } from 'next-auth/jwt';
import { useSession } from 'next-auth/react';
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
  const { data: session } = useSession();

  const { push } = useRouter();
  const { username, id } = session?.token as any;

  const usernameQuery = username ? `${username}` : id;

  const handleSettingsClick = async () => {
    if (!username) {
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
    console.log(session);
  }, [session]);

  useEffect(() => {
    async function getUserData() {
      if (!username) {
        const response = await api.get(`/users/${id}`);

        return setData(response.data);
      }

      setData(session?.user as User);
    }

    getUserData();
  }, []);

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
