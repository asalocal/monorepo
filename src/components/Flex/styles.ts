import { VariantProps } from '@stitches/react';
import { styled } from 'styles/Theme.provider';

export const FlexWrapper = styled('div', {
  display: 'flex',
  boxSizing: 'border-box',
  variants: {
    alignItems: {
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
      baseline: {
        alignItems: 'baseline',
      },
      spaceBetween: {
        alignItems: 'space-between',
      },
    },
    alignContent: {
      start: {
        alignContent: 'flex',
      },
      end: {
        alignContent: 'flex-end',
      },
      center: {
        alignContent: 'center',
      },
      spaceBetween: {
        alignContent: 'space-between',
      },
      spaceAround: {
        alignContent: 'space-around',
      },
      stretch: {
        alignContent: 'stretch',
      },
    },
    flexWrap: {
      wrap: {
        flexWrap: 'wrap',
      },
      wrapReverse: {
        flexWrap: 'wrap-reverse',
      },
      nowrap: {
        flexWrap: 'nowrap',
      },
    },
    justifyContent: {
      normal: {
        justifyContent: 'normal',
      },
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
      stretch: {
        justifyContent: 'stretch',
      },
      spaceBetween: {
        justifyContent: 'space-between',
      },
    },
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
      rowReverse: {
        flexDirection: 'row-reverse',
      },
      columnReverse: {
        flexDirection: 'column-reverse',
      },
    },
  },
});

export type FlexVariants = VariantProps<typeof FlexWrapper>;
