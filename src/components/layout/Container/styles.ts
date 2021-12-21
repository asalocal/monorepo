import { VariantProps } from '@stitches/react';
import { styled } from 'styles/Theme.provider';

export const Wrapper = styled('div', {
  positon: 'relative',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingRight: 'calc(12 / 2)',
  paddingLeft: 'calc(12 / 2)',
  maxWidth: '100%',
  boxSizing: 'border-box',

  '@sm': {
    width: '100%',
  },
  '@md': {
    width: '100%',
  },
  '@lg': {
    width: '1240px',
  },

  variants: {
    fullWidth: {
      true: {
        '@sm': {
          width: '100%',
        },
        '@md': {
          width: '100%',
        },
        '@lg': {
          width: '100%',
        },
      },
      false: {},
    },
  },
});

export type WrapperVariants = VariantProps<typeof Wrapper>;
