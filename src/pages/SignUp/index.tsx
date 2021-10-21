import { Container, Content, Background, ContentWrapper } from './styles';

import logo from '../../assets/logo.svg';
import Input from 'components/Input';
import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import { Form } from '@unform/web';
import { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { verifyPasswordStrenght } from 'utils/verifyPasswordStrenght';
import { Link } from 'react-router-dom';

interface SignUpFormData {
  fullname: string;
  email: string;
  password: string;
}

function SignUp() {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    ({ fullname, email, password }: SignUpFormData) => {
      formRef.current?.setErrors({});

      const { strength } = verifyPasswordStrenght(password);

      if (password.length <= 6 || strength === 'weak') {
        formRef.current?.setErrors({
          password:
            'Senha deve ter mais de 6 caracteres ou é considerada fraca',
        });
        return;
      }
      console.log({ fullname, email, password });
    },
    []
  );

  return (
    <Container>
      <Content>
        <ContentWrapper>
          <img src={logo} alt="Build your trip" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              onChange={() => {
                formRef.current?.setErrors({});
              }}
              name="fullname"
              type="text"
              placeholder="Full Name"
            />
            <Input
              onChange={() => {
                formRef.current?.setErrors({});
              }}
              name="email"
              type="email"
              placeholder="Email"
            />
            <Input
              onChange={() => {
                formRef.current?.setErrors({});
              }}
              name="password"
              type="password"
              verifyPassword
              placeholder="Senha"
            />
            <Button type="submit">Sign Up</Button>
            <Checkbox>I accept the terms of use</Checkbox>
          </Form>
          <span>
            Have an account? <Link to="/signin">Sign In</Link>
          </span>
        </ContentWrapper>
      </Content>
      <Background />
    </Container>
  );
}

export default SignUp;
