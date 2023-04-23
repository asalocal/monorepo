import { styled, keyframes } from '@kaiju-ui/theme';

export const Container = styled('div', {
  display: 'flex',
  marginTop: '10px',

  '.strength-container': {
    width: '100%',
  },

  '[data-state="active"]': {},
});

export const PasswordContainer = styled('div', {
  height: '5px',
  width: '100px',
  transition: 'all .2s ease',
  borderRadius: '5px',
  margin: '10px 0',
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
});

const open = keyframes({
  from: {
    width: '0',
    height: '0px',
  },
  to: {
    width: '300px',
    height: '20px',
  },
});

const close = keyframes({
  from: {
    width: '300px',
    height: '20px',
  },
  to: {
    width: '0px',
    height: '0px',
  },
});

export const MessageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  width: '0',

  '&[data-state="active"]': {
    animation: `${open} .3s ease-in-out`,
    width: '300px',
  },

  '&[data-state="inactive"]': {
    animation: `${close} .3s ease-in-out`,
    height: '0px',
  },
});
