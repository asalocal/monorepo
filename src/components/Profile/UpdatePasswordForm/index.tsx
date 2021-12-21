import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import api from 'api/api';
import Button from 'components/Button';
import Input from 'components/Input';
import { Col, Container, Row } from 'components/layout';
import { useAuth } from 'context/AuthContext';
import { useToast } from 'context/ToastContext';
import { useCallback, useRef } from 'react';
import getValidationErrors from 'utils/getValidationErrors';
import * as yup from 'yup';
interface IUpdatePasswordData {
  password: string;
  confirmPassword: string;
}

function UpdatePasswordForm() {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const { user } = useAuth();

  const handleSubmit = useCallback(
    async ({ password, confirmPassword }: IUpdatePasswordData) => {
      try {
        formRef.current?.setErrors({});
        const schema = yup.object().shape({
          password: yup
            .string()
            .required('Senha obrigatória')
            .min(6, 'Senha muito curta'),
          confirmPassword: yup
            .string()
            .required('Confirmação de senha obrigatória')
            .min(6, 'Senha muito curta'),
        });

        await schema.validate(
          { password, confirmPassword },
          { abortEarly: false }
        );

        await api.put(`/users/password/${user.id}`, {
          password,
          confirmPassword,
        });

        addToast({ type: 'success', title: 'Password updated with success' });
      } catch (err) {
        if (err instanceof yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Something has gone wrong while updating your password',
          message: 'Please, try again later',
        });
      }
    },
    [addToast, user]
  );
  return (
    <Container css={{ marginTop: '20px', padding: '20px' }}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Row>
          <Col lg={6}>
            <Input
              type="password"
              name="password"
              placeholder="New Password"
              id="password"
            />
          </Col>
          <Col lg={6}>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="New Password"
              id="confirmPassword"
            />
          </Col>
        </Row>
        <Row css={{ marginTop: '30px' }}>
          <Col lg={12}>
            <Button>Continue</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default UpdatePasswordForm;
