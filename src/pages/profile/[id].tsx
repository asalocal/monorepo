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

interface IUserData {
  id: string;
  name: string;
  email: string;
  password: string;
  isincomplete: boolean;
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
    <Container>
      <Row>
        <Navbar overwriteScroll />
      </Row>
      <Row css={{ position: 'relative', marginTop: '150px' }}>
        <Col sm={6} md={4} lg={3}>
          <img
            style={{ width: '90%' }}
            src="/assets/user-default.png"
            alt="User default"
          />
          <Button
            css={{
              width: 'fit-content',
              svg: { margin: '0' },
              position: 'absolute',
              left: '50px',
              borderRadius: '50%',
              bottom: '0',
            }}
          >
            <Pencil2Icon />
          </Button>
        </Col>
        <Col sm={6} md={6} lg={6}>
          <Flex
            direction="column"
            justifyContent="center"
            css={{ height: '100%', marginLeft: '30px' }}
          >
            <Text as="h1">{user.name}</Text>
            <Text as="span" css={{ color: '$gray9' }}>
              Account created at{' '}
              {new Intl.DateTimeFormat('pt-BR').format(
                new Date(user.createdat)
              )}
            </Text>
          </Flex>
        </Col>
      </Row>

      <Flex css={{ marginTop: '50px' }}>
        <Tabs>
          <TabsList defaultValue="personal-data">
            <TabsItem value="personal-data">Personal Data</TabsItem>
            <TabsItem value="login-data">Login Data</TabsItem>
          </TabsList>
          <TabsContent value="personal-data">
            <Container css={{ marginTop: '20px', padding: '20px' }}>
              <Form onSubmit={(data) => console.log(data)}>
                <Row>
                  <Col lg={6}>
                    <Input
                      type="text"
                      css={{ width: '100%' }}
                      placeholder="Full name"
                      defaultValue={user.name}
                      name="name"
                      id="fullName"
                    />
                  </Col>
                  <Col lg={6}>
                    <Input
                      css={{ width: '100%' }}
                      type="email"
                      placeholder="Email"
                      defaultValue={user.email}
                      name="email"
                      id="email"
                    />
                  </Col>
                </Row>
                <Row css={{ marginTop: '30px' }}>
                  <Col lg={12}>
                    <Input
                      css={{ width: '100%' }}
                      type="tel"
                      placeholder="Cellphone"
                      defaultValue={user.cellphone || ''}
                      name="cellphone"
                      id="cellphone"
                    />
                  </Col>
                </Row>
              </Form>
            </Container>
          </TabsContent>
          <TabsContent value="login-data">
            <UpdatePasswordForm />
          </TabsContent>
        </Tabs>
      </Flex>
    </Container>
  );
}

export default Profile;
