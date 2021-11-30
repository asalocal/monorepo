import { VariantProps } from '@stitches/react';
import { styled } from 'styles/Theme.provider';

export const RadioChecked = styled('div', {
  height: '20px',
  width: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  border: '1px solid $gray9',
  marginRight: '5px',
  transition: 'all 0.2s ease',

  '&:hover': {
    backgroundColor: '$gray5',
  },
});

export const Label = styled('label', {
  display: 'flex',
  fontSize: '11px',
});

export const RadioInput = styled('input', {});
export type WrapperVariants = VariantProps<typeof RadioChecked>;
