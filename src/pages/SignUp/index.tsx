import { Container, Content, ContentWrapper } from './styles';

import logo from '../../assets/logo.svg';
import Input from 'components/Input';
import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import { Form } from '@unform/web';
import { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { verifyPasswordStrenght } from 'utils/verifyPasswordStrenght';
import { Link, useHistory } from 'react-router-dom';

import * as yup from 'yup';
import getValidationErrors from 'utils/getValidationErrors';
import api from 'api/api';
interface SignUpFormData {
  fullname: string;
  email: string;
  password: string;
}

function SignUp() {
  const formRef = useRef<FormHandles>(null);

  const { push } = useHistory();

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

        await api.post('/users/create', {
          name: fullname,
          email,
          password,
        });

        push('/');
      } catch (err) {
        if (err instanceof yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [push]
  );

  const handleChange = useCallback(() => {
    formRef.current?.setErrors({});
  }, []);

  return (
    <Container>
      <Content>
        <ContentWrapper>
          <img src={logo} alt="Build your trip" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              onChange={handleChange}
              name="fullname"
              theme="light"
              type="text"
              placeholder="Full Name"
            />
            <Input
              onChange={handleChange}
              name="email"
              theme="light"
              type="email"
              placeholder="Email"
            />
            <Input
              onChange={handleChange}
              name="password"
              theme="light"
              type="password"
              verifyPassword
              placeholder="Senha"
            />
            <Button variant="secondary" type="submit">
              Sign Up
            </Button>
            <Checkbox>I accept the terms of use</Checkbox>
          </Form>
          <span>
            Have an account? <Link to="/signin">Sign In</Link>
          </span>
        </ContentWrapper>
      </Content>
    </Container>
  );
}

export default SignUp;
