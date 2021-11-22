import { styled } from '../../styles/Theme.provider';

export const ExplorerContainer = styled('div', {
  marginBottom: '-50px',
  width: '100%',
  height: '100%',
  maxHeight: '180px',
});

export const ExplorerWrapper = styled('div', {
  backgroundColor: '$gray1',
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.25)',
  width: '100%',
  borderRadius: '0 5px 5px 5px',
  zIndex: '9',
  padding: '20px',
});

export const ExplorerButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  color: '$gray12',
  backgroundColor: '$gray1',
  border: 'none',
  borderRadius: '5px 0 0 0',
  padding: '10px',
  position: 'relative',
  zIndex: '9999',

  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    backgroundColor: '$gray6',
    color: '$gray12',
  },

  svg: {
    marginRight: '10px',
  },

  variants: {
    selected: {
      true: {
        backgroundColor: '$gray1',
      },
      false: {
        backgroundColor: 'rgba(255, 255, 255, 0.49)',
        color: '$gray1',
      },
    },
  },
});

export const DiscoverButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.49)',
  border: 'none',
  color: '$gray1',
  borderRadius: '0 5px 0 0',
  padding: '10px',
  position: 'relative',
  zIndex: '9999',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    color: '$gray12',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },

  svg: {
    marginRight: '10px',
  },

  variants: {
    selected: {
      true: {
        color: '$gray12',
        backgroundColor: '$gray1',
      },
    },
  },
});

export const ButtonContainer = styled('div', {
  display: 'flex',
});

export const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  variants: {
    selected: {
      true: {
        display: 'flex',
      },
      false: {
        display: 'none',
      },
    },
  },
});

export const TripOptionsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',

  'div + div': {
    marginLeft: '20px',
  },
});

export const InputContainers = styled('div', {
  display: 'flex',
  alignItems: 'center',

  'div:first-child': {
    marginLeft: '0',
  },

  div: {
    margin: '0 20px',
  },

  padding: '10px 0',
  marginTop: '20px',
});
