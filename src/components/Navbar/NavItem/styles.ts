import { NavLink } from 'react-router-dom';
import { styled } from '../../../styles/Theme.provider';

export const NavLinkContainer = styled(NavLink, {
  color: 'inherit',
  textDecoration: 'none',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
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
