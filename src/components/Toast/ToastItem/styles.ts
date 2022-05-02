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

const popIn = keyframes({
  '0%': {
    transform: 'translateY(100%) translateX(-50%)',
  },
  '100%': {
    transform: 'translateY(0) translateX(-50%)',
  },
});

const rightSlideIn = keyframes({
  '0%': {
    transform: 'translateX(-100%)',
  },
  '100%': {
    transform: 'translateX(0)',
  },
});

export const ToastItemContainer = styled('div', {
  width: '100%',
  maxWidth: '350px',
  maxHeight: '120px',
  backgroundColor: '$gray1',
  padding: '10px',
  zIndex: '999999',
  borderRadius: '5px',
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',

  strong: {
    color: '$gray12',
    fontWeight: '500',
    fontSize: '14px',
  },

  p: {
    color: '$gray10',
    fontSize: '13px',
  },

  '& + div': {
    marginTop: '10px',
  },

  variants: {
    position: {
      bottom: {
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: `${popIn} 0.5s ease-in-out`,
      },
      left: {
        animation: `${rightSlideIn} 0.5s ease-in-out`,
        left: '10px',
        top: '10px',
      },
      right: {
        animation: `${slideIn} 0.5s ease-in-out`,
      },
    },
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
