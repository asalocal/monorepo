import { Form } from '@unform/web';
import Button from 'components/Button';
import Input from 'components/Input';
import { useCallback, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container, Content, ContentWrapper } from '../styles/SignIn.styles';
import Flex from 'components/Flex';
import { signIn } from 'next-auth/react';
import Head from 'next/head';
import { useToast } from 'context/ToastContext';
import { darkTheme } from 'styles/Theme.provider';

function SignIn() {
  const [loading, setLoading] = useState(false);
  const { back } = useRouter();

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data) => {
      try {
        setLoading(true);

        await signIn('default', data);

        window.location.href = '/';

        setLoading(false);
      } catch (error: any) {
        addToast({
          title: "We're sorry, something has gone wrong",
          message: 'Please try again later',
          type: 'error',
        });
        setLoading(false);
      }
    },
    [signIn, addToast]
  );

  return (
    <>
      <Head>
        <title>Sign in - Build Your Trip</title>
      </Head>
      <Container className={darkTheme}>
        <Content>
          <ContentWrapper>
            <img src="/assets/logo.svg" alt="Build your trip" />
            <Form onSubmit={handleSubmit}>
              <Input
                type="email"
                name="email"
                theme="light"
                id="email"
                label="Email"
              />
              <Input
                type="password"
                theme="light"
                name="password"
                id="password"
                label="Password"
              />
              <Flex
                css={{
                  [`button + button`]: {
                    marginLeft: '10px',
                  },
                }}
              >
                <Button
                  loading={loading}
                  type="button"
                  variant="alternative"
                  onClick={() => back()}
                >
                  Back
                </Button>
                <Button variant="secondary" loading={loading} type="submit">
                  Sign In
                </Button>
              </Flex>
            </Form>
            <span>
              Don't have an account? <Link href="/signup">Sign up</Link>
            </span>
          </ContentWrapper>
        </Content>
      </Container>
    </>
  );
}

SignIn.isAuthenticated = false;

export default SignIn;
