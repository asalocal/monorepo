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
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: '#ccc',

  variants: {
    strength: {
      none: {
        backgroundColor: '#ccc',
      },
      weak: {
        backgroundColor: 'red',
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
