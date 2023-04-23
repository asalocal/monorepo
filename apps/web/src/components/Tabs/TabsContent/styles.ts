import { styled } from '@kaiju-ui/theme';

export const TabsContentContainer = styled('div', {
  display: 'none',
  width: '100%',

  variants: {
    active: {
      true: {
        display: 'flex',
      },
    },
  },
});
