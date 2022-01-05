import { createContext, useCallback, useContext, useState } from 'react';

interface FieldElement {
  name: string;
  ref: React.RefObject<HTMLInputElement>;
  value: string | number;
  id: string;
}

interface FieldError {
  name: string;
  message: string;
}

interface FormContextData {
  fields: FieldElement[];
  registerField: (field: FieldElement) => void;
  validateFields: () => void;
  errors: FieldError[];
  registerError: (error: FieldError) => void;
  data: Record<string, any>;
}

interface FormProviderProps {
  children: React.ReactNode;
}

const FormContext = createContext<FormContextData>({} as FormContextData);

export const FormProvider = ({ children }: FormProviderProps) => {
  const [fields, setFields] = useState<FieldElement[]>([]);
  const [data, setData] = useState<Record<string, any>>(
    {} as Record<string, any>
  );
  const [errors, setErrors] = useState<FieldError[]>([]);

  const registerField = useCallback(
    ({ id, name, ref, value }: FieldElement) => {
      setFields((prevFields) => [...prevFields, { id, name, ref, value }]);

      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    },
    []
  );

  const validateFields = useCallback(() => {
    fields.forEach((field) => {
      if (field.ref.current?.value === '') {
        setErrors((prevErrors) => [
          ...prevErrors,
          { name: field.name, message: 'Campo obrigatório' },
        ]);
      }
    });
  }, [fields]);

  const registerError = useCallback((error: FieldError) => {
    setErrors((prevErrors) => [...prevErrors, error]);
  }, []);

  return (
    <FormContext.Provider
      value={{
        fields,
        data,
        errors,
        registerError,
        validateFields,
        registerField,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }

  return context;
};
