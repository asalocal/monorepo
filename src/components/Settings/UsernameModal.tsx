import Modal from 'components/Modal';
import Flex from 'components/Flex';
import Text from 'components/Text';
import Input from 'components/Input';
import { Form } from '@unform/web';
import Button from 'components/Button';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { UserComplete } from 'context/AuthContext';
import api from 'api/api';
import { AxiosResponse } from 'axios';
import nookies from 'nookies';

interface UsernameModalProps {
  userData: UserComplete;
  isOpen: boolean;
}

function UsernameModal({ userData, isOpen }: UsernameModalProps) {
  const [username, setUsername] = useState(userData.username || '');

  const { push } = useRouter();

  const updateUsername = useCallback(
    async (data: { username: string; name: string }) => {
      const updatedUser: AxiosResponse<UserComplete> = await api.put(
        `/users/${userData.id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${nookies.get(null).token}`,
          },
        }
      );

      setUsername(updatedUser.data?.username || '');

      if (updatedUser.status === 200) {
        push(`/settings/${userData.id || username}`);
      }
    },
    [push, userData.id, username]
  );

  return (
    <>
      <Modal isOpen={isOpen}>
        <Flex
          direction="column"
          css={{
            backgroundColor: '$gray1',
            maxWidth: '400px',
            width: '100%',
            padding: '40px',
            borderRadius: '10px',
          }}
        >
          <Text as="span" css={{ opacity: 0.4, marginBottom: '20px' }}>
            To continue with your experience, you need to insert your username
          </Text>
          <Form onSubmit={updateUsername}>
            {!userData.name && (
              <Input
                type="text"
                placeholder="Ex.: John Doe"
                label="Name"
                name="name"
                id="name"
                css={{ marginBottom: '15px' }}
              />
            )}
            <Input
              type="text"
              placeholder="Ex.: john_doe"
              label="Username"
              name="username"
              id="username"
            />

            <Flex css={{ marginTop: '20px' }}>
              <Button
                variant="alternative"
                type="button"
                onClick={() => (window.location.href = '/')}
                css={{
                  marginRight: '10px',
                  color: '$primary !important',
                  border: '1px solid $primary !important',

                  '&:hover': {
                    backgroundColor: 'rgba(255, 92, 0, 0.05) !important',
                  },
                }}
              >
                Return to Homepage
              </Button>
              <Button>Create username</Button>
            </Flex>
          </Form>
        </Flex>
      </Modal>
    </>
  );
}

export default UsernameModal;
