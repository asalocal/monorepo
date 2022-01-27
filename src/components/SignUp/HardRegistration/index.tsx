import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import Flex from 'components/Flex';
import Input from 'components/Input';
import { useCallback, useRef } from 'react';
import { useToast } from 'context/ToastContext';
import { useRouter } from 'next/router';
import { verifyPasswordStrenght } from 'utils/verifyPasswordStrenght';
import * as yup from 'yup';
import api from 'api/api';
import getValidationErrors from 'utils/getValidationErrors';

interface SignUpHardFormData {
  fullname: string;
  email: string;
  cellphone: string;
  password: string;
}

function HardRegistration() {
  const formRef = useRef<FormHandles>(null);

  const handleChange = useCallback(() => {
    formRef.current?.setErrors({});
  }, []);

  const { back, push } = useRouter();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async ({ fullname, email, cellphone, password }: SignUpHardFormData) => {
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
          cellphone: yup.string().min(14, 'Digite um celular válido'),
          password: yup
            .string()
            .required('Senha obrigatória')
            .min(6, 'Senha muito curta'),
        });

        await schema.validate(
          { fullname, email, password },
          { abortEarly: false }
        );

        const data = await api.post('/users/create', {
          name: fullname,
          cellphone,
          email,
          password,
        });

        console.log(data);

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
    [addToast, push]
  );

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input
        onChange={handleChange}
        name="fullname"
        theme="light"
        type="text"
        label="Full Name"
      />
      <Input
        onChange={handleChange}
        name="cellphone"
        theme="light"
        type="tel"
        label="Cellphone"
      />
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
      />
      <Flex
        css={{
          [`button + button`]: {
            marginLeft: '10px',
          },
        }}
      >
        <Button type="button" variant="alternative" onClick={() => back()}>
          Back
        </Button>
        <Button variant="secondary" type="submit">
          Sign Up
        </Button>
      </Flex>
      <Checkbox name="acceptTerms">I accept the terms of use</Checkbox>
    </Form>
  );
}

export default HardRegistration;
