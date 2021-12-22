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

interface IUserData {
  id: string;
  name: string;
  email: string;
  password: string;
  isincomplete: boolean;
  subtitle?: string;
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

  const userData = await (await api.get(`/users/${id}`)).data;

  return {
    props: {
      user: userData,
    },
  };
};

function Profile({ user }: ProfileProps) {
  return (
    <>
      <Head>
        <title>{user.name} - Profile</title>
      </Head>
      <Container>
        <Row>
          <Navbar staticMenu />
        </Row>

        <Row css={{ marginTop: '200px' }}>
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

            <Flex direction="column" justifyContent="center">
              <Text as="h1">{user.name}</Text>
              <Text as="span" css={{ color: '$gray9' }}>
                Account created at{' '}
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(user.createdat)
                )}
              </Text>
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
                    css={{ width: '100%', marginTop: '30px', padding: '20px' }}
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
                          placeholder="Full name"
                          defaultValue={user.name}
                          name="name"
                          id="fullName"
                        />
                        <Input
                          css={{ width: '100%', marginTop: '20px' }}
                          type="email"
                          placeholder="Email"
                          defaultValue={user.email}
                          disabled
                          name="email"
                          id="email"
                        />
                        <Input
                          css={{ width: '100%', marginTop: '20px' }}
                          type="tel"
                          placeholder="Cellphone"
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
                  <UpdatePasswordForm />
                </TabsContent>
              </Tabs>
            </Flex>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Profile;
