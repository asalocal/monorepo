import { styled } from '../../styles/Theme.provider';

export const InputContainer = styled('div', {
  borderBottom: '1px solid $gray6',
  position: 'relative',
  display: 'flex',
  width: '100%',
  alignItems: 'center',

  '& + div': {
    marginTop: '15px',
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
  svg: {
    marginRight: 10,
  },

  variants: {
    isFocused: {
      true: {
        opacity: 1,
        transform: 'translateY(-20px) translateX(-10px) scale(0.8)',
      },
    },
    isFilled: {
      true: {
        opacity: 1,

        transform: 'translateY(-20px) translateX(-10px) scale(0.8)',
      },
    },
  },
});
