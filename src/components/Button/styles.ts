import { styled } from '../../styles/Theme.provider';

export const Container = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',
  height: '40px',
  padding: '10px',

  border: 'none',
  borderRadius: '5px',
  backgroundColor: '#fff',
  color: '$primary',
  fontWeight: '700',
  transition: 'all .2s ease',
  zIndex: '3',

  overflow: 'hidden',

  svg: {
    marginRight: '10px',
  },
  '&:hover': {
    color: 'white',

    backgroundColor: '$primary',
    '&:before': {
      width: '100%',
    },
  },

  '&:disabled': {
    pointerEvents: 'none',
  },

  variants: {
    loading: {
      true: {
        '&:after': {
          backgroundColor: '$gray5',
        },
      },
    },
    variant: {
      primary: {
        backgroundColor: '$primary !important',
        color: '$gray1',

        '&:hover': {
          backgroundColor: '$primaryHover !important',
        },
      },
      secondary: {
        backgroundColor: 'white !important',
        color: '$primary',

        '&:hover': {
          color: '$primaryHover !important',
        },
      },
    },
  },
});
