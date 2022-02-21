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
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const formRef = useRef<FormHandles>(null);
  const { back, push } = useRouter();
  const { addToast } = useToast();

  const { signIn } = useAuth();

  const handleSubmit = useCallback(async ({}: SignUpFormData) => {}, []);

  const handleSoftSubmit = useCallback(async () => {
    try {
      formRef.current?.setErrors({});
      const { strength } = verifyPasswordStrenght(passwordValue);

      if (strength === 'weak') {
        formRef.current?.setErrors({
          password:
            'Senha é considerada fraca, escolha uma senha de uma força regular para cima',
        });
        return;
      }

      await api.post('/users/create/soft', {
        email: emailValue,
        password: passwordValue,
      });

      signIn({ email: emailValue, password: passwordValue });

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
  }, [addToast, push, signIn, passwordValue, emailValue, url]);

  const handleChange = useCallback(() => {
    formRef.current?.setErrors({});
  }, []);

  return (
    <>
      <Head>
        <title>Sign up - Build Your Trip</title>
      </Head>
      <Container className={darkTheme}>
        <Content>
          <ContentWrapper>
            <img src="/assets/logo.svg" alt="Build your trip" />
            {soft === 'true' || url ? (
              <Form onSubmit={console.log}>
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
                    disabled={emailValue && passwordValue ? true : false}
                    onClick={() => back()}
                  >
                    Back
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={handleSoftSubmit}
                    type="submit"
                  >
                    Sign Up
                  </Button>
                </Flex>
                <Checkbox name="acceptTerms">
                  I accept the terms of use
                </Checkbox>
              </Form>
            ) : (
              <Form onSubmit={handleSubmit}>
                <HardRegistration />
              </Form>
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
