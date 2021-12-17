import { VariantProps } from '@stitches/react';
import { keyframes, styled } from '../../../styles/Theme.provider';

const slideIn = keyframes({
  '0%': {
    transform: 'translateX(100%)',
  },
  '100%': {
    transform: 'translateX(0)',
  },
});

export const ToastItemContainer = styled('div', {
  width: '100%',
  maxHeight: '120px',
  backgroundColor: '$gray1',
  padding: '10px',
  borderRadius: '5px',

  strong: {
    color: '$gray12',
    fontWeight: '500',
    fontSize: '12px',
  },

  p: {
    color: '$gray10',
    fontSize: '11px',
  },

  '& + div': {
    marginTop: '10px',
  },

  animation: `${slideIn} 0.5s ease-in-out`,

  variants: {
    type: {
      success: {
        borderBottom: '4px solid $colors$green11',
      },
      error: {
        borderBottom: '4px solid $tomato11',
      },
    },
  },
});

export type ToastItemVariants = VariantProps<typeof ToastItemContainer>;
