import { Container, Content, ContentWrapper } from '../styles/Signup.styles';
import { Form } from '@unform/web';

import Input from 'components/Input';
import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { verifyPasswordStrenght } from 'utils/verifyPasswordStrenght';
import Link from 'next/link';
import * as yup from 'yup';
import getValidationErrors from 'utils/getValidationErrors';
import Flex from 'components/Flex';
import api from 'api/api';
import { useRouter } from 'next/router';
import { useToast } from 'context/ToastContext';
import Head from 'next/head';
import HardRegistration from 'components/SignUp/HardRegistration';
import { GetServerSideProps } from 'next';
import { darkTheme } from 'styles/Theme.provider';
import { useAuth } from 'context/AuthContext';
import { getSession } from 'next-auth/react';
import HeadSEO from 'components/HeadSEO';
import Image from 'next/image';

interface SignUpFormData {
  fullname: string;
  email: string;
  password: string;
}

interface ServerPropsData {
  initialData: {
    query: {
      soft?: string;
      url?: string;
    };
  };
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

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
    props: {
      initialData: {
        query: query,
      },
    },
  };
};

function SignUp({
  initialData: {
    query: { soft, url },
  },
}: ServerPropsData) {
  const formRef = useRef<FormHandles>(null);
  const { back, push } = useRouter();
  const { addToast } = useToast();

  const { signin } = useAuth();

  const handleSoftSubmit = useCallback(
    async ({ email, password }: { email: string; password: string }) => {
      try {
        formRef.current?.setErrors({});
        const { strength } = verifyPasswordStrenght(password);

        if (strength === 'weak') {
          formRef.current?.setErrors({
            password:
              'Senha é considerada fraca, escolha uma senha de uma força regular para cima',
          });
          return;
        }

        await api.post('/users', { email, password });

        signin({
          credentials: {
            email,
            password,
          },
          provider: 'default',
        });

        if (url) {
          push(url);
          return;
        }

        push('/');
      } catch (err) {
        if (err instanceof yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          title: 'Something has gone wrong',
          message: 'Please, try again later',
          type: 'error',
        });
      }
    },
    [addToast, push, signin, url]
  );

  const handleChange = useCallback(() => {
    formRef.current?.setErrors({});
  }, []);

  return (
    <>
      <HeadSEO title="Sign Up" />
      <Container className={darkTheme}>
        <Content>
          <ContentWrapper>
            <Image
              src="/assets/logo.svg"
              width="70px"
              height="70px"
              alt="Build your trip"
            />
            {soft === 'true' || url ? (
              <Form onSubmit={handleSoftSubmit}>
                <Input
                  onChange={handleChange}
                  name="email"
                  theme="light"
                  type="email"
                  label="Email"
                />
                <Input
                  onChange={handleChange}
                  name="password"
                  theme="light"
                  type="password"
                  verifyPassword
                  label="Password"
                  css={{
                    marginTop: '10px',
                  }}
                />
                <Flex
                  css={{
                    [`button + button`]: {
                      marginLeft: '10px',
                    },
                  }}
                >
                  <Button
                    type="button"
                    variant="alternative"
                    onClick={() => back()}
                  >
                    Back
                  </Button>
                  <Button variant="secondary" type="submit">
                    Sign Up
                  </Button>
                </Flex>
                <Checkbox name="acceptTerms">
                  I accept the terms of use
                </Checkbox>
              </Form>
            ) : (
              <HardRegistration />
            )}
            <span>
              Have an account? <Link href="/signin">Sign In</Link>
            </span>
          </ContentWrapper>
        </Content>
      </Container>
    </>
  );
}

export default SignUp;
