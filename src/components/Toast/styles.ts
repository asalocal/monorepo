import { styled } from '../../styles/Theme.provider';

export const ToastContainer = styled('div', {
  position: 'fixed',
  maxWidth: '350px',
  zIndex: '999999',
  width: '100%',
  top: '0',
});

export const ToastBottomContainer = styled('div', {
  position: 'fixed',
  maxWidth: '350px',
  zIndex: '999999',
  bottom: '10px',
  width: '100%',
  left: '50%',
});

export const ToastLeftContainer = styled('div', {
  position: 'fixed',
  maxWidth: '350px',
  zIndex: '999999',
  width: '100%',
  left: '10px',
  top: 0,
});

export const ToastRightContainer = styled('div', {
  position: 'fixed',
  maxWidth: '350px',
  right: '10px',
  width: '100%',
  zIndex: '999999',
  top: '10px',
});
