import { FormHTMLAttributes, useCallback } from 'react';
import { FormProvider, useForm } from './FormContext';
import { FormContainer } from './styles';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  doSubmit?: (data: Record<string, any>) => void;
}

function Form({ children, doSubmit, ...props }: FormProps) {
  return (
    <FormProvider>
      <FormWrapper doSubmit={doSubmit}>{children}</FormWrapper>
    </FormProvider>
  );
}

function FormWrapper({ children, doSubmit, ...props }: FormProps) {
  const { validateFields, data } = useForm();

  const handleSubmit = useCallback(() => {
    validateFields();

    if (doSubmit) {
      doSubmit(data);
    }
  }, [doSubmit, validateFields, data]);

  return <FormContainer onSubmit={handleSubmit}>{children}</FormContainer>;
}

export default Form;
