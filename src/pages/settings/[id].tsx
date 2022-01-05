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
import { useModal } from 'context/ModalProvider';
import { useEffect } from 'react';
import Modal from 'components/Modal';
interface IUserData {
  id: string;
  name: string;
  email: string;
  password: string;
  isincomplete: boolean;
  subtitle?: string;
  username?: string;
  createdat: string;
  updatedat: string;
  cellphone: string | null;
}

interface ProfileProps {
  user: IUserData;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: { id },
  } = context;

  try {
    const cookies = nookies.get(context);

    const userData = await (
      await api.get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      })
    ).data;

    return {
      props: {
        user: userData,
      },
    };
  } catch (err: any) {
    return {
      props: {
        user: {
          name: 'Error',
        },
        error: {
          statusCode: err.response.status || 500,
        },
      },
    };
  }
};

function Settings({ user }: ProfileProps) {
  const { openModal } = useModal();

  const updateUsername = async (data: { username: string }) => {
    const updatedUser = await api.put(`/users/username/${user.id}`, data, {
      headers: {
        Authorization: `Bearer ${nookies.get(null).token}`,
      },
    });

    if (updatedUser.status === 200) {
      openModal(false);
    }
  };

  useEffect(() => {
    if (!user.username) {
      openModal(true);
    }
  }, [user, openModal]);

  return (
    <>
      <Head>
        <title>{user.name} - Profile</title>
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
                <Text as="h1">{user.name}</Text>
                {user.username && (
                  <Text as="span" css={{ color: '$gray9', marginTop: '-px' }}>
                    @{user.username}
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
                      <Form
                        style={{ width: '100%' }}
                        onSubmit={(data) => console.log(data)}
                      >
                        <Flex
                          direction="column"
                          alignItems="center"
                          css={{ width: '100%' }}
                        >
                          <Input
                            type="text"
                            css={{ width: '100%' }}
                            label="Full name"
                            defaultValue={user.name}
                            name="name"
                            id="fullName"
                          />
                          <Input
                            css={{ width: '100%', marginTop: '20px' }}
                            type="email"
                            label="Email"
                            defaultValue={user.email}
                            disabled
                            name="email"
                            id="email"
                          />
                          <Input
                            css={{ width: '100%', marginTop: '20px' }}
                            type="tel"
                            label="Cellphone"
                            defaultValue={user.cellphone || ''}
                            name="cellphone"
                            id="cellphone"
                          />

                          <Button css={{ marginTop: '50px', width: '200px' }}>
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

                      <Flex css={{ marginTop: '30px' }}>
                        <Text as="span" css={{ color: '$gray9' }}>
                          Account created at{' '}
                          {new Intl.DateTimeFormat('pt-BR').format(
                            new Date(user.createdat)
                          )}
                        </Text>
                      </Flex>
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

      <Modal>
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
            <Input
              type="text"
              placeholder="Ex.: @john_doe"
              label="Username"
              name="username"
              id="username"
            />
            <Flex css={{ marginTop: '20px' }}>
              <Button
                variant="alternative"
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

Settings.isAuthenticated = true;
export default Settings;
