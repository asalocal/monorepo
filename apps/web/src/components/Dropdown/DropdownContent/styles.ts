import { styled } from '@kaiju-ui/theme';

export const DropdownContentContainer = styled('div', {
  position: 'absolute',
  backgroundColor: '$gray1',
  borderRadius: '5px',
  marginTop: '5px',
  width: '100%',
  maxWidth: '200px',
  fontSize: '12px',
  display: 'flex',
  zIndex: '999999',
  transform: 'translateX(-15%)',
  boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.3)',
});
