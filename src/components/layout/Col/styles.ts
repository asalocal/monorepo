import { VariantProps } from '@stitches/react';
import { styled } from 'styles/Theme.provider';

export const Wrapper = styled('div', {
  width: '100%',
  position: 'relative',

  padding: '0 12px',

  variants: {
    sm: {
      12: {
        '@sm': {
          width: 'calc(100% /1)',
        },
      },
      11: {
        '@sm': {
          width: 'calc(12 / 11)',
        },
      },
      10: {
        '@sm': {
          width: 'calc(12 / 10)',
        },
      },
      9: {
        '@sm': {
          width: 'calc(12 / 9)',
        },
      },
      8: {
        '@sm': {
          width: 'calc(12 / 8)',
        },
      },
      7: {
        '@sm': {
          width: 'calc(12 / 7)',
        },
      },
      6: {
        '@sm': {
          width: 'calc(12 / 6)',
        },
      },
      5: {
        '@sm': {
          width: 'calc(12 / 5)',
        },
      },
      4: {
        '@sm': {
          width: 'calc(12 / 4)',
        },
      },
      3: {
        '@sm': {
          width: 'calc(12 / 3)',
        },
      },
      2: {
        '@sm': {
          width: 'calc(12 / 2)',
        },
      },
      1: {
        '@sm': {
          width: 'calc(12 / 1)',
        },
      },
    },
    md: {
      12: {
        '@md': {
          width: 'calc(100% / 1)',
        },
      },
      11: {
        '@md': {
          width: 'calc(100% (12 / 11))',
        },
      },
      10: {
        '@md': {
          width: 'calc(100% / (12 / 10))',
        },
      },
      9: {
        '@md': {
          width: 'calc(100% / (12 / 9))',
        },
      },
      8: {
        '@md': {
          width: 'calc(100% / (12 / 8))',
        },
      },
      7: {
        '@md': {
          width: 'calc(100% / (12 / 7))',
        },
      },
      6: {
        '@md': {
          width: 'calc(100% / (12 / 6))',
        },
      },
      5: {
        '@md': {
          width: 'calc(100% / (12 / 5))',
        },
      },
      4: {
        '@md': {
          width: 'calc(100% / (12 / 4))',
        },
      },
      3: {
        '@md': {
          width: 'calc(100% / (12 / 3))',
        },
      },
      2: {
        '@md': {
          width: 'calc(100% / (12 / 2))',
        },
      },
      1: {
        '@md': {
          width: 'calc(100% / (12 / 1))',
        },
      },
    },
    lg: {
      12: {
        '@lg': {
          width: 'calc(100% / 1)',
        },
      },
      11: {
        '@lg': {
          width: 'calc(100% / (12 / 11))',
        },
      },
      10: {
        '@lg': {
          width: 'calc(100% / (12 / 10))',
        },
      },
      9: {
        '@lg': {
          width: 'calc(100% / (12 / 9))',
        },
      },
      8: {
        '@lg': {
          width: 'calc(100% / (12 / 8))',
        },
      },
      7: {
        '@lg': {
          width: 'calc(100% / (12 / 7))',
        },
      },
      6: {
        '@lg': {
          width: 'calc(100% / (12 / 6))',
        },
      },
      5: {
        '@lg': {
          width: 'calc(100% / (12 / 5))',
        },
      },
      4: {
        '@lg': {
          width: 'calc(100% / (12 /4))',
        },
      },
      3: {
        '@lg': {
          width: 'calc(100% / (12 /3))',
        },
      },
      2: {
        '@lg': {
          width: 'calc(100% / (12 /2))',
        },
      },
      1: {
        '@lg': {
          width: 'calc(100% / (12 /1))',
        },
      },
    },
    noGutters: {
      true: {
        paddingRight: 0,
        paddingLeft: 0,
      },
      false: {},
    },
  },
});

export type WrapperVariants = VariantProps<typeof Wrapper>;
