import { FormEvent, FormEventHandler, FormHTMLAttributes } from 'react';
import { BYTCSS } from '@kaiju-ui/theme';
import { FormVariants, FormWrapper } from './styles';

export interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {
  onSubmit: (values: any) => void;
  children: React.ReactNode;
  css?: BYTCSS;
}

function FormComponent({ children, onSubmit, css, ...props }: IFormProps) {
  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    // @ts-ignore
    const form = ev.target.elements;

    const values = Object.create({});

    for (const key of Object.keys(form)) {
      if (/^\d*$/gm.test(key) && key !== '') {
        if (form[key].type === 'submit') {
          break;
        }

        if (form[key].name === '') {
          continue;
        }

        Object.assign(values, {
          [form[key].name]:
            form[key].type === 'checkbox' ? form[key].checked : form[key].value,
        });
      }
    }

    onSubmit(values);
  };

  return (
    <FormWrapper css={css} onSubmit={handleSubmit} {...props}>
      {children}
    </FormWrapper>
  );
}

export default FormComponent;
