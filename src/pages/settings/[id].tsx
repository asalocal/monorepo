import api from 'api/api';
import Button from 'components/Button';
import Flex from 'components/Flex';
import { Pencil2Icon } from '@modulz/radix-icons';
import { Col, Container, Row } from 'components/layout';
import Navbar from 'components/Navbar';
import Tabs from 'components/Tabs';
import TabsContent from 'components/Tabs/TabsContent';
import TabsItem from 'components/Tabs/TabsItem';
import TabsList from 'components/Tabs/TabsList';
import Text from 'components/Text';
import { GetServerSideProps } from 'next';
import Input from 'components/Input';
import { Form } from '@unform/web';
import UpdatePasswordForm from 'components/Profile/UpdatePasswordForm';
import Head from 'next/head';
import nookies from 'nookies';
import React, { useCallback, useEffect, useState } from 'react';
import maskCreation from 'utils/inputMaskCreation';
import { AxiosResponse } from 'axios';
import { UserComplete } from 'context/AuthContext';
import UsernameModal from 'components/Settings/UsernameModal';

interface ProfileProps {
  user: UserComplete;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: { id },
  } = context;

  try {
    const cookies = nookies.get(context);

    const userData = await api.get(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${cookies.token}`,
      },
    });

    return {
      props: {
        user: userData.data,
      },
    };
  } catch (err: any) {
    return {
      props: {
        user: {
          name: 'Error',
          message: err.message,
        },
        error: {
          statusCode: err.response.status || 500,
        },
      },
    };
  }
};

function Settings({ user }: ProfileProps) {
  const [userData, setUserData] = useState<UserComplete>(user);
  const [cellphone, setCellphone] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleDateOfBirth = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const dateOfBirthFormatted = e.target.value.replace(/\D/g, '');

      const dateOfBirthMasked = maskCreation({
        type: 'date',
        value: dateOfBirthFormatted,
      });

      setDateOfBirth(dateOfBirthMasked);
    },
    []
  );

  const handleCellphoneChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const cellphoneFormatted = e.target.value.replace(/\D/g, '');

      const maskedCellphone = maskCreation({
        type: 'cellphone',
        value: cellphoneFormatted,
      });

      setCellphone(maskedCellphone);
    },
    []
  );

  const updateUser = useCallback(
    async (data) => {
      const updateUserData: AxiosResponse<UserComplete> = await api.patch(
        `/users/update/${user.id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${nookies.get(null).token}`,
          },
        }
      );

      if (updateUserData.status === 200) {
        setUserData((prevState) => ({
          ...prevState,
          ...updateUserData.data,
        }));
      }
    },
    [user.id]
  );

  useEffect(() => {
    setCellphone(user.cellphone || '');
  }, []);

  useEffect(() => {
    if (user.isincomplete) {
      setModalOpen(true);
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>{user.name ? user.name : 'User'} - Profile</title>
      </Head>
      <Container>
        <Row>
          <Navbar staticMenu />
        </Row>
        {user ? (
          <Row css={{ marginTop: '150px' }}>
            <Col
              sm={3}
              md={4}
              lg={4}
              css={{
                borderRadius: '10px',
                padding: '60px 30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'white',
                height: 'fit-content',
                boxShadow: '0 0 25px 2px rgba(0, 0, 0, 0.15)',
              }}
            >
              <Flex
                css={{
                  position: 'relative',
                  marginTop: '-100px',
                  width: 'fit-content',
                }}
              >
                <img
                  style={{
                    width: '100%',
                  }}
                  src="/assets/user-default.png"
                  alt="User default"
                />
                <Button
                  css={{
                    width: 'fit-content',
                    svg: { margin: '0' },
                    position: 'absolute',
                    right: '50px',
                    height: 'fit-content',
                    borderRadius: '999px',
                    bottom: '0',
                  }}
                >
                  <Pencil2Icon />
                </Button>
              </Flex>

              <Flex
                direction="column"
                alignItems="center"
                justifyContent="spaceBetween"
                css={{ height: '100%' }}
              >
                <Text as="h1">{userData.name}</Text>
                {userData.username && (
                  <Text as="span" css={{ color: '$gray9', marginTop: '10px' }}>
                    @{userData.username}
                  </Text>
                )}
              </Flex>
              {user.subtitle && (
                <Text as="p" css={{ textAlign: 'center', marginTop: '30px' }}>
                  Desenvolvedor front-end e apaixonado por games
                </Text>
              )}
            </Col>
            <Col sm={12} md={4} lg={8}>
              <Flex css={{ marginLeft: '30px' }}>
                <Tabs>
                  <TabsList defaultValue="personal-data">
                    <TabsItem value="personal-data">Personal Data</TabsItem>
                    <TabsItem value="login-data">Login Data</TabsItem>
                  </TabsList>
                  <TabsContent value="personal-data">
                    <Flex
                      alignItems="center"
                      justifyContent="center"
                      direction="column"
                      css={{
                        width: '100%',
                        marginTop: '30px',
                        padding: '20px',
                      }}
                    >
                      <Text
                        as="p"
                        css={{ marginBottom: '10px', color: '$gray9' }}
                      >
                        Update your data
                      </Text>
                      <Form style={{ width: '100%' }} onSubmit={updateUser}>
                        <Flex
                          direction="column"
                          alignItems="center"
                          css={{ width: '100%' }}
                        >
                          <Input
                            type="text"
                            css={{ width: '100%' }}
                            label="Full name"
                            defaultValue={userData.name}
                            name="name"
                            id="fullName"
                          />
                          <Input
                            css={{ width: '100%', marginTop: '20px' }}
                            type="email"
                            label="Email"
                            defaultValue={userData.email}
                            disabled
                            name="email"
                            id="email"
                          />
                          <Input
                            css={{ width: '100%', marginTop: '20px' }}
                            type="tel"
                            label="Cellphone"
                            name="cellphone"
                            id="cellphone"
                            value={cellphone}
                            onChange={handleCellphoneChange}
                          />
                          <Input
                            css={{ width: '100%', marginTop: '20px' }}
                            type="text"
                            label="Birth date"
                            name="birthDate"
                            id="birthDate"
                            value={dateOfBirth}
                            onChange={handleDateOfBirth}
                          />

                          <Button
                            type="submit"
                            css={{ marginTop: '50px', width: '200px' }}
                          >
                            Update
                          </Button>
                        </Flex>
                      </Form>
                    </Flex>
                  </TabsContent>
                  <TabsContent value="login-data">
                    <Flex
                      direction="column"
                      alignItems="center"
                      css={{
                        width: '100%',
                        marginTop: '30px',
                        padding: '20px',
                      }}
                    >
                      <UpdatePasswordForm />
                    </Flex>
                  </TabsContent>
                </Tabs>
              </Flex>
            </Col>
          </Row>
        ) : (
          <Row css={{ marginTop: '200px' }}>
            <Flex>
              <Text as="span">Something has gone wrong</Text>
            </Flex>
          </Row>
        )}
      </Container>

      <UsernameModal isOpen={modalOpen} userData={user} />
    </>
  );
}

Settings.isAuthenticated = true;
export default Settings;
