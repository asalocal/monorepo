import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import api from 'api/api';
import Button from 'components/Button';
import Flex from 'components/Flex';
import Input from 'components/Input';
import { Col, Container, Row } from 'components/layout';
import Text from 'components/Text';
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

        addToast({
          type: 'success',
          title: 'Password updated with success',
          message: 'On the next login, you need to use the new password',
        });
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
    <>
      <Text as="p" css={{ marginBottom: '10px', color: '$gray9' }}>
        Change your password
      </Text>
      <Form style={{ width: '100%' }} ref={formRef} onSubmit={handleSubmit}>
        <Flex direction="column" alignItems="center" css={{ width: '100%' }}>
          <Input
            type="password"
            name="password"
            label="New Password"
            id="password"
          />
          <Input
            type="password"
            name="confirmPassword"
            css={{ marginTop: '30px' }}
            label="Confirm new password"
            id="confirmPassword"
          />
          <Button css={{ marginTop: '50px', width: '200px' }}>Update</Button>
        </Flex>
      </Form>
    </>
  );
}
export default UpdatePasswordForm;
