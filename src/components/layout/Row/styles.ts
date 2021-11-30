import { VariantProps } from '@stitches/react';
import { styled } from 'styles/Theme.provider';

export const Wrapper = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  mr: 'calc(12 / 2)',
  ml: 'calc(12 / 2)',
  boxSizing: 'border-box',

  variants: {
    align: {
      normal: {
        alignItems: 'normal',
      },
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
      stretch: {
        alignItems: 'stretch',
      },
    },
  },
});

export type WrapperVariants = VariantProps<typeof Wrapper>;
