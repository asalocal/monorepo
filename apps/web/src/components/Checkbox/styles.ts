import { styled } from '@kaiju-ui/theme';

export const CheckboxContainer = styled('button', {
  display: 'flex',
  background: 'transparent',
  alignItems: 'center',
  justifyContent: 'flex-start',
  border: 'none',
  height: '30px',
  width: '100%',
});

export const CheckboxBox = styled('div', {
  maxWidth: '20px !important',
  maxHeight: '20px !important',
  width: '100%',
  height: '100%',
  border: '1px solid #c4c4c4 !important',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 10,
  borderRadius: 5,

  svg: {
    color: '$gray1',
    width: '1.5rem',
    height: '1.5rem',
  },

  transition: 'all 0.2s ease',

  variants: {
    isChecked: {
      true: {
        border: '1px solid $colors$blue9 !important',
        background: '$blue9',
      },
    },
  },
});

export const CheckboxLabel = styled('span', {
  marginTop: '0 !important',
  width: '100%',
  textAlign: 'left !important',
});
