import { Form } from '@unform/web';
import Button from 'components/Button';
import Input from 'components/Input';
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container, Content, ContentWrapper } from '../styles/SignIn.styles';
import Flex from 'components/Flex';
import Head from 'next/head';
import { useToast } from 'context/ToastContext';
import { darkTheme } from 'styles/Theme.provider';
import { FiGithub } from 'react-icons/fi';
import { useAuth } from 'context/AuthContext';
import { getSession } from 'next-auth/react';
import HeadSEO from 'components/HeadSEO';
import Image from 'next/image';

export async function getStaticProps(context: any) {
  const session = await getSession({
    req: context.req,
  });

  if (session) {
    return {
      props: {},
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {}, // will be passed to the page component as props
  };
}

function SignIn() {
  const [loading, setLoading] = useState(false);
  const { back, query } = useRouter();
  const { signin } = useAuth();
  const { addToast } = useToast();

  const handleGitHubLogin = async () => {
    setLoading(true);

    await signin({
      provider: 'github',
    });
  };

  const handleSubmit = async (data: any) => {
    try {
      setLoading(true);

      const info = await signin({
        credentials: {
          redirect: false,
          ...data,
        },
        provider: 'default',
      });

      if (info.status === 401) {
        throw new Error('Invalid credentials');
      }

      window.location.href = '/';

      setLoading(false);
    } catch (error: any) {
      addToast({
        title: `${error.message}`,
        message: 'Please verify your credentials',
        type: 'error',
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    console.log(query);
  }, []);

  return (
    <>
      <HeadSEO title="Sign In" />
      <Container className={darkTheme}>
        <Content>
          <ContentWrapper>
            <Image
              src="/assets/logo.svg"
              width="220px"
              height="150px"
              alt="Build your trip"
            />
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

            <span>or</span>

            <Button
              variant="alternative"
              onClick={handleGitHubLogin}
              css={{
                display: 'flex',
                alignItems: 'center',
                borderColor: '$gray1 !important',
                color: '$gray6 !important',

                svg: {
                  marginLeft: '10px',
                },
              }}
            >
              Sign in with GitHub <FiGithub />
            </Button>
          </ContentWrapper>
        </Content>
      </Container>
    </>
  );
}

SignIn.isAuthenticated = false;

export default SignIn;
