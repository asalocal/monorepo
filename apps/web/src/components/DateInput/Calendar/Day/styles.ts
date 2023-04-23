import Button from '@kaiju-ui/button';
import { styled } from '@kaiju-ui/theme';

export const DayButtonContainer = styled(Button, {
  opacity: '0.5',
  backgroundColor: 'transparent',
  color: '$gray11',
  borderRadius: '0',

  '&:disabled': {
    opacity: '0.45',
  },

  '&:hover': {
    opacity: 1,
    color: '$gray12 !important',
    backgroundColor: 'rgba(255, 92, 0, 0.4) !important',
  },

  variants: {
    active: {
      true: {
        opacity: 1,
        backgroundColor: '$primary !important',
        color: 'white',

        '&:hover': {
          color: '$gray1 !important',
          backgroundColor: 'rgba(255, 92, 0, 0.4) !important',
          opacity: 1,
        },
      },
    },
    dayValidation: {
      true: {
        backgroundColor: 'rgba(255, 92, 0, 0.3) !important',
        color: '$gray12 !important',
      },
      false: {},
    },
  },
});
