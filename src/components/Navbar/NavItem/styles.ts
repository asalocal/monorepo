import { styled } from '../../../styles/Theme.provider';

export const NavLinkContainer = styled('a', {
  color: '$gray4',
  textDecoration: 'none',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  fontSize: '14px',
  borderRadius: '5px',
  transition: 'all 0.2s ease',
  fontWeight: 'regular',

  svg: {
    marginRight: '0.5rem',
    alignSelf: 'center',
  },

  '& + a': {
    marginTop: '20px',
  },

  '&.active': {
    fontWeight: 'bold',
  },

  '&:hover': {
    backgroundColor: '#F15903',
    color: '$gray1',
  },

  variants: {
    visible: {
      true: {
        svg: {
          margin: 0,
        },
      },
    },
    orientation: {
      horizontal: {
        width: 'fit-content',
        justifyContent: 'flex-end',
        '& + a': {
          marginTop: '0',
          marginLeft: '20px',
        },
      },
      vertical: {},
    },
    type: {
      link: {},
      button: {
        backgroundColor: '$primary',
      },
    },
  },
});
