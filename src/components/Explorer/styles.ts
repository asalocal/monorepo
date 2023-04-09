import { styled } from '../../styles/Theme.provider';

export const ExplorerContainer = styled('div', {
  maxHeight: '180px',
  margin: '0 auto -50px auto',
  width: 'fit-content',
});

export const ExplorerWrapper = styled('div', {
  backgroundColor: '$gray1',
  display: 'flex',
  alignItems: 'center',
  boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.25)',
  borderRadius: '200px 0 200px 200px',
  zIndex: '9',
});

export const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px 70px',
});

export const InputContainers = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '80px',
  'div:first-child': {
    marginLeft: '0',
  },
  height: '96px',
});
