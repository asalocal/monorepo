import { styled } from 'styles/Theme.provider';

export const Container = styled('button', {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  border: 'none',
  backgroundColor: 'transparent',
  flexDirection: 'column',
  maxWidth: '30px',
  width: '100%',
  height: '50px',
});

export const TopLineMenu = styled('div', {
  height: '4px',
  width: '90%',
  backgroundColor: '#fff',
  marginBottom: '5px',
  transition: 'all .2s ease',

  variants: {
    open: {
      true: {
        width: '100%',
      },
    },
  },
});

export const MiddleLineMenu = styled(TopLineMenu, {
  width: '70%',
  transition: 'all .2s ease',

  variants: {
    open: {
      true: {
        width: '100%',
      },
    },
  },
});

export const BottomLineMenu = styled(TopLineMenu, {
  width: '40%',
  transition: 'all .2s ease',

  variants: {
    open: {
      true: {
        width: '100%',
      },
    },
  },
});
