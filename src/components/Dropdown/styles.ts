import { styled } from '../../styles/Theme.provider';

export const DropdownContainer = styled('div', {
  position: 'relative',
});

export const DropdownTrigger = styled('button', {
  display: 'flex',
  backgroundColor: 'transparent',
  color: '$gray1',
  border: 'none',
  padding: '10px',
  borderRadius: '5px',
  marginLeft: '10px',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    backgroundColor: 'white',
    color: '$gray12',
  },

  variants: {
    active: {
      true: {
        backgroundColor: 'white',
        color: '$gray12',
      },
    },
  },
});
