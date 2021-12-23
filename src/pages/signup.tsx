import { Container, Content, ContentWrapper } from '../styles/Signup.styles';

import Input from 'components/Input';
import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import { Form } from '@unform/web';
import { useCallback, useRef } from 'react';
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
  const formRef = useRef<FormHandles>(null);
  const { back, push } = useRouter();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async ({ fullname, email, password }: SignUpFormData) => {
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

        const schema = yup.object().shape({
          fullname: yup.string().required('Nome obrigatório'),
          email: yup
            .string()
            .email('Digite um e-mail válido')
            .required('E-mail obrigatório'),
          password: yup
            .string()
            .required('Senha obrigatória')
            .min(6, 'Senha muito curta'),
        });

        await schema.validate(
          { fullname, email, password },
          { abortEarly: false }
        );

        await api.post('/users/create/soft', {
          name: fullname,
          email,
          password,
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
    [url, addToast, push]
  );

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
              <Form ref={formRef} onSubmit={handleSubmit}>
                <Input
                  onChange={handleChange}
                  name="email"
                  theme="light"
                  type="email"
                  defaultValue="Teste"
                  label="Email"
                />
                <Input
                  onChange={handleChange}
                  name="password"
                  theme="light"
                  type="password"
                  verifyPassword
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
