import { styled } from '../../styles/Theme.provider';
export const Container = styled('button', {
  display: 'inline-block',
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
  '&:after': {
    content: '',
    position: 'absolute',
    borderRadius: '5px',

    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    zIndex: '-2',
  },

  '&:before': {
    content: '',
    position: 'absolute',
    borderRadius: '5px',

    bottom: 0,
    left: 0,
    width: 0,
    height: '100%',
    background:
      'linear-gradient(90deg, rgba(135,205,255,1) 0%, rgba(103,180,236,1) 100%)',
    transition: 'all .2s ease',
    zIndex: '-1',
  },

  '&:hover': {
    color: 'white',
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
  },
});
