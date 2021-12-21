import { styled } from 'styles/Theme.provider';

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
