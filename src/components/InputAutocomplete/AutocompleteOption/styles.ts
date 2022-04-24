import { styled } from 'styles/Theme.provider';

export const OptionWrapper = styled('option', {
  backgroundColor: 'white',

  padding: '5px',
  fontSize: '12px',
  color: '$gray11',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: '#e0e0e0',
    cursor: 'pointer',
  },
});
