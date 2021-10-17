import { styled } from '../../styles/Theme.provider';
export const Container = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  height: '40px',

  border: 'none',
  backgroundColor: '#fff',
  borderRadius: '5px',
  color: '$primary',
  fontWeight: '700',
  transition: 'all .2s ease',

  '&:hover': {
    backgroundColor: '$gray3',
  },
});
