import { styled } from 'styles/Theme.provider';

export const TabsItemContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '56px',
  maxWidth: '220px',
  width: '100%',

  borderBottom: '2px solid rgba(255, 92, 0, 0.5)',
  transition: 'all 0.2s ease',

  variants: {
    active: {
      true: {
        backgroundColor: 'rgba(255, 92, 0, 0.05)',
        borderBottom: '2px solid $primary',
      },
    },
  },
});

export const TabsItemTrigger = styled('button', {
  display: 'flex',
  width: '100%',
  height: '100%',
  border: 'none',
  backgroundColor: 'transparent',
  justifyContent: 'center',
  alignItems: 'center',
});
