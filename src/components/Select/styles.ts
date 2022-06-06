import { styled, keyframes } from '../../styles/Theme.provider';

const leaving = keyframes({
  '0%': {
    height: '100%',
  },
  '100%': {
    height: '0%',
  },
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
    variant: {
      default: {},
      outlined: {
        border: '1px solid $gray8',
        padding: '5px 10px',
      },
    },
  },
});

export const OpenIcon = styled('div', {
  transition: 'all 0.2s ease-in-out',
  variants: {
    isOpen: {
      true: {
        transform: 'rotate(180deg) translateY(1px)',
      },
    },
  },
});

export const OptionsContainer = styled('div', {
  boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.25)',
  position: 'absolute',
  transform: 'translateY(40px)',
  backgroundColor: '$gray1',
  borderRadius: '5px',
  zIndex: '9999',
  minWidth: '90px',

  'option:first-child': {
    borderRadius: '5px 5px 0 0 !important',
  },

  'option:last-child': {
    borderRadius: '0 0 5px 5px !important',
  },

  variants: {
    isSelecting: {
      true: {
        display: 'flex',
        flexDirection: 'column',
      },
      false: {
        display: 'none',
      },
    },
    isLeaving: {
      true: {
        animation: `${leaving} 0.5s ease`,
      },
      false: {},
    },
  },
});

export const OptionWrapper = styled('option', {
  color: '$gray11',
  width: '100%',
  display: 'flex',
  padding: '10px',
  fontSize: '11px',
  transition: 'all 0.2s ease',

  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '$gray6',
  },
});
