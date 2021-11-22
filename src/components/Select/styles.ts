import { styled, keyframes } from '../../styles/Theme.provider';

const grow = keyframes({
  '0%': {
    transform: 'translateY(-50px) scaleY(0)',
  },
  '100%': {
    transform: 'traslateY(0) scaleY(1)',
  },
});

const shrink = keyframes({
  '0%': {
    transform: 'traslateY(0) scaleY(1)',
  },
  '100%': {
    transform: 'translateY(-50px) scaleY(0)',
  },
});

export const SelectContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export const SelectWrapper = styled('button', {
  display: 'flex',
  backgroundColor: 'transparent',
  padding: '10px',
  borderRadius: '5px',
  transition: 'all 0.2s ease-in-out',
  border: 'none',

  '&:hover': {
    backgroundColor: '$gray3',
  },

  variants: {
    active: {
      true: {
        backgroundColor: '$gray3',
      },
      false: {},
    },
  },
});

export const OptionsContainer = styled('div', {
  boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.25)',
  position: 'absolute',
  backgroundColor: '$gray1',
  marginTop: '40px',
  borderRadius: '5px',
  zIndex: '9999',

  variants: {
    isSelecting: {
      true: {
        display: 'flex',
        flexDirection: 'column',
        animation: `${grow} 0.5s ease`,
      },
      false: {
        display: 'none',
        animation: `${shrink} 0.5s ease`,
      },
    },
  },
});

export const Option = styled('span', {
  color: '$gray11',
  width: '100%',
  display: 'flex',
  padding: '10px',
  fontSize: '11px',
  borderRadius: '5px',
  transition: 'all 0.2s ease',

  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '$gray6',
  },
});
