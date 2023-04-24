import { VariantProps } from '@stitches/react';
import { styled } from '@kaiju-ui/theme';

export const FormWrapper = styled('form', {
  width: '100%',
});

export type FormVariants = VariantProps<typeof FormWrapper>;
