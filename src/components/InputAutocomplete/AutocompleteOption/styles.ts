import { styled } from 'styles/Theme.provider';

export const OptionWrapper = styled('button', {
  backgroundColor: 'white',
  border: 'none',
  fontSize: '12px',
  color: '$gray11',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: '#e0e0e0',
    cursor: 'pointer',
  },

  variants: {
    isBeingSearched: {
      true: {
        display: 'flex',
      },
      false: {
        display: 'none',
      },
    },
  },
});
