import { VariantProps } from '@stitches/react';
import { styled } from '@kaiju-ui/theme';

export const RadioChecked = styled('div', {
  height: '10px',
  width: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '20px',
  backgroundColor: '$primary',
  transition: 'all 0.2s ease',

  '&:hover': {
    backgroundColor: '$gray5',
  },
});

export const Label = styled('label', {
  display: 'flex',
  fontSize: '11px',
});

export const RadioInput = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '20px',
  height: '20px',
  borderRadius: '40px',
  border: '1px solid $gray9',
});

export const InputHidden = styled('input', {});

export type WrapperVariants = VariantProps<typeof RadioChecked>;
