import { styled } from 'styles/Theme.provider';

export const TabsListContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  width: '100% !important',

  variants: {
    orientation: {
      horizontal: {},
      vertical: {
        flexDirection: 'column',
        width: '220px',
      },
    },
  },
});
