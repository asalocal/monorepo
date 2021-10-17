import { styled, keyframes } from '../../../styles/Theme.provider';

export const Container = styled('div', {
  display: 'flex',
});

export const PasswordContainer = styled('div', {
  height: '5px',
  width: '100px',
  transition: 'all .2s ease',
  borderRadius: '5px',

  '& + div': {
    marginLeft: '5px',
  },
});

export const ShowPasswordStrength = keyframes({
  '100%': {
    backgroundPosition: '100% 0 !important',
  },
});

export const WeakPassword = styled(PasswordContainer, {
  display: 'flex',
  backgroundColor: '#C4C4C4',
  overflow: 'hidden',
  position: 'relative',

  '&::after': {
    content: '',
    display: 'block',
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    position: 'absolute',

    backgroundImage:
      'linear-gradient(90deg,rgb(0, 189, 19) 0%, rgb(0, 189, 19) 100%);',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '50%',
    backgroundPosition: '0 0',
  },

  variants: {
    strength: {
      none: {
        backgroundColor: '#ccc',
      },
      weak: {
        '&::after': {
          animation: `${ShowPasswordStrength} 0.2s ease`,
        },
      },
      medium: {
        backgroundColor: '#F4E133',
      },
      high: {
        backgroundColor: '#24FF3A',
      },
      strong: {
        backgroundColor: '#00BD13',
      },
    },
  },
});

export const MediumPassword = styled(PasswordContainer, {
  variants: {
    strength: {
      none: {
        backgroundColor: '#ccc',
      },
      weak: {
        backgroundColor: '#ccc',
      },
      medium: {
        backgroundColor: '#F4E133',
      },
      high: {
        backgroundColor: '#24FF3A',
      },
      strong: {
        backgroundColor: '#00BD13',
      },
    },
  },
});

export const HighPassword = styled(PasswordContainer, {
  variants: {
    strength: {
      none: {
        backgroundColor: '#ccc',
      },
      weak: {
        backgroundColor: '#ccc',
      },
      medium: {
        backgroundColor: '#ccc',
      },
      high: {
        backgroundColor: '#24FF3A',
      },
      strong: {
        backgroundColor: '#00BD13',
      },
    },
  },
});

export const StrongPassword = styled(PasswordContainer, {
  variants: {
    strength: {
      none: {
        backgroundColor: '#ccc',
      },
      weak: {
        backgroundColor: '#ccc',
      },
      medium: {
        backgroundColor: '#ccc',
      },
      high: {
        backgroundColor: '#ccc',
      },
      strong: {
        backgroundColor: '#00BD13',
      },
    },
  },
});

export const PasswordMessage = styled('span', {
  margin: '0 !important',
  marginTop: '15px !important',
});
