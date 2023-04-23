import { VariantProps } from '@stitches/react';
import { styled } from '@kaiju-ui/theme';

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginRight: 'calc(12 / -2)',
  marginLeft: 'calc(12 / -2)',
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
