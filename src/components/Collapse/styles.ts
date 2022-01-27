import { styled } from 'styles/Theme.provider';

export const CollapseContainer = styled('div', {
  borderRadius: '10px',
  border: '1px solid #C4C4C4',
  padding: '10px',

  h5: {
    opacity: '0.4',
    fontWeight: '500',
    margin: '5px 0',
  },
});

export const CollapseItemTrigger = styled('button', {
  width: '100%',
  border: '1px solid #c4c4c4',
  cursor: 'pointer',
  padding: '15px',
  display: 'flex',
  justifyContent: 'space-between',
  borderRadius: '10px',
  transition: 'all 0.3s ease',
  background: 'rgba(218, 218, 218, 0.4)',

  variants: {
    active: {
      true: {
        background: 'rgba(218, 218, 218, 0.8)',
      },
    },
  },
});

export const CollapseContentContainer = styled('div', {
  display: 'none',
  padding: '20px 15px',
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
