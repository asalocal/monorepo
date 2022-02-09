import { styled } from 'styles/Theme.provider';

export const CollapseContainer = styled('div', {
  borderRadius: '10px',
  padding: '10px',

  h5: {
    opacity: '0.4',
    fontWeight: '500',
    margin: '5px 0',
  },
});

export const CollapseItemTrigger = styled('button', {
  width: '100%',
  cursor: 'pointer',
  padding: '15px',
  background: '#FFF',
  border: 'none',
  borderBottom: '2px solid $primary',
  display: 'flex',
  borderRadius: '5px',
  justifyContent: 'space-between',
  transition: 'all 0.3s ease',

  variants: {
    active: {
      true: {
        background: '#FFEDE2',
      },
    },

    variant: {
      special: {
        background: 'rgba(218, 218, 218, 0.4)',
        borderRadius: '10px',
        border: '1px solid #c4c4c4',
      },
      default: {},
    },
  },

  compoundVariants: [
    {
      variant: 'special',
      active: true,
      css: {
        backgroundColor: 'rgba(218,218,218,0.8)',
        border: '1px solid #C4C4C4',
      },
    },
  ],
});

export const CollapseContentContainer = styled('div', {
  display: 'none',
  padding: '20px 15px 15px 15px',
  marginTop: '-10px',
  borderBottom: '1px solid rgba(218, 218, 218, 0.8)',
  borderLeft: '1px solid rgba(218, 218, 218, 0.8)',
  borderRight: '1px solid rgba(218, 218, 218, 0.8)',

  borderBottomLeftRadius: '10px',
  borderBottomRightRadius: '10px',

  variants: {
    active: {
      true: {
        display: 'block',
      },
    },
  },
});

export const CollapseItemContainer = styled('div', {
  [`& + &`]: {
    marginTop: '20px',
  },
});
