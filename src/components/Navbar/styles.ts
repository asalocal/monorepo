import { styled } from '../../styles/Theme.provider';

export const NavContainer = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '50px',
  color: '$gray1',

  variants: {
    orientation: {
      horizontal: {
        margin: 0,
        width: 'fit-content',
        flexDirection: 'row',
        alignItems: 'center',
      },
    },
  },
});

export const LogoContainer = styled('div', {
  display: 'flex',
  width: '100%',
  alignItems: 'center',

  variants: {
    orientation: {
      horizontal: {
        width: '30%',
      },
      vertical: {},
    },
  },
});

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '30px 0',
  height: '100vh',
  width: '300px',
  position: 'relative',
  transition: 'all 0.2s ease',
  backgroundColor: '$primary',

  '> svg': {
    position: 'absolute',
    right: 20,
    top: 15,
    color: '$gray1',
    cursor: 'pointer',
  },

  img: {
    width: '50%',
  },

  variants: {
    hidden: {
      true: {
        width: '100px',
        img: {
          width: '20px',
        },
      },
    },
    orientation: {
      horizontal: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        height: 'fit-content',
      },
      vertical: {},
    },
    background: {
      transparent: {
        backgroundColor: 'transparent',
      },
      primary: {
        backgroundColor: '$primary',
      },
    },
  },
});
