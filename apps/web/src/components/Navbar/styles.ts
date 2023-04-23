import { styled } from '@kaiju-ui/theme';

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

  a: {
    height: '33px',
    svg: {
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        transform: 'scale(1.1)',
      },
    },
  },

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
  height: '90px',

  left: '0',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  transition: 'all 0.2s ease',
  backgroundColor: 'transparent',
  zIndex: '99999',
  borderBottom: '0.5px solid $background',

  variants: {
    scrolled: {
      true: {
        height: '60px',
        backgroundColor: '$background',
        borderColor: '$background',

        svg: {
          path: {
            fill: '$primary',
          },
        },

        nav: {
          a: {
            color: '$primary',
          },
        },
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
  height: '100%',

  '> svg': {
    position: 'absolute',
    right: 20,
    top: 15,
    color: '$gray1',
    cursor: 'pointer',
  },

  variants: {
    hidden: {
      true: {
        width: '100px',
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
