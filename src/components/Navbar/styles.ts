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
  width: '50%',
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
  position: 'fixed',
  left: '0',
  alignItems: 'center',
  width: '100%',
  transition: 'all 0.2s ease',
  backgroundColor: 'transparent',
  zIndex: '99999',

  variants: {
    scrolled: {
      true: {
        backgroundColor: '$primary',
      },
    },
    staticMenu: {
      true: {
        backgroundColor: '$primary !important',
      },
    },
  },
});

export const WrapperContainer = styled('div', {
  display: 'flex',
  alignItems: 'space-between',
  width: '400px',
  padding: '20px',

  '> svg': {
    position: 'absolute',
    right: 20,
    top: 15,
    color: '$gray1',
    cursor: 'pointer',
  },

  img: {
    width: '40%',
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
        width: '1240px',
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
