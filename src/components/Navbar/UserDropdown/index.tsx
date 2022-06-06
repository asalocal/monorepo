import { PersonIcon, ExitIcon, MixerHorizontalIcon } from '@modulz/radix-icons';
import api from 'api/api';
import routesAPI from 'api/routesAPI';
import Dropdown from 'components/Dropdown';
import Icon from 'components/Icon';
import { useAuth, User } from 'context/AuthContext';
import { getToken } from 'next-auth/jwt';
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
  const { user, signout } = useAuth();

  const { push } = useRouter();

  const usernameQuery = user.username ? `${user.username}` : user.id;

  const handleSettingsClick = async () => {
    if (!user.username) {
      const response: any = await routesAPI.get(`/users`);

      const userString = response?.data.username
        ? response.data.username
        : response.data.id;

      push(`/settings/${userString}`);

      return;
    }

    push(`/settings/${usernameQuery}`);
  };

  return (
    <Dropdown label={<UserInfo name={user.name || 'Client'} />}>
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
            onClick={() => signout()}
          >
            <ExitIcon />
          </DropdownLink>
        </UserDataContainer>
      </Content>
    </Dropdown>
  );
}

export default UserDropdown;
