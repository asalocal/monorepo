import Icon from 'components/Icon';
import { styled } from '@kaiju-ui/theme';

export const InputContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const InputContainer = styled('div', {
  borderBottom: '1px solid $gray6',
  position: 'relative',
  display: 'flex',
  width: '100%',
  alignItems: 'center',

  svg: {
    color: '$gray1',
    margin: '0 10px',
    width: 20,
    height: 20,
  },

  variants: {
    hasError: {
      true: {
        borderBottom: '1px solid red',
      },
    },
    theme: {
      light: {},
      primary: {
        svg: {
          fill: '$background',
        },
        borderBottom: '1px solid $primary',
      },
    },
  },
});

export const ShowPasswordButton = styled(Icon, {
  cursor: 'pointer',
});

export const Label = styled('label', {
  color: '$gray1',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  left: 10,
  transition: 'all 0.2s ease',
  opacity: 0.5,
  pointerEvents: 'auto',
  cursor: 'text',

  svg: {
    marginRight: 10,
  },

  variants: {
    isFocused: {
      true: {
        opacity: 0.7,
        transform: 'translateY(-20px) translateX(-10px) scale(0.8)',
      },
    },
    isFilled: {
      true: {
        opacity: 1,
        transform: 'translateY(-20px) translateX(-10px) scale(0.8)',
      },
    },
    disabled: {
      true: {
        opacity: '0.3 !important',
      },
    },
    theme: {
      light: {},
      primary: {
        svg: {
          color: '$primary',
        },
        color: '$gray11',
      },
    },
  },
});

export const InputWrapper = styled('input', {
  backgroundColor: 'transparent',
  border: 'none',
  height: '45px',
  width: '100%',
  marginTop: 10,
  padding: 10,
  color: 'white',
  outline: 'none',
  '&:disabled': {
    opacity: 0.3,
  },

  variants: {
    theme: {
      light: {},
      primary: {
        color: '$gray12',
      },
    },
  },
});

export const ErrorMessage = styled('span', {
  color: '$gray4 !important',
  fontSize: '0.8rem !important',
  marginTop: '5px',
  variants: {
    theme: {
      light: {},
      primary: {
        color: '$primary !important',
      },
    },
  },
});
