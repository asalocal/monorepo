import Flex from 'components/Flex';
import { styled, keyframes } from 'styles/Theme.provider';

const entry = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
});

export const CardContainer = styled(Flex, {
  backgroundColor: '$gray1',
  borderRadius: '5px',
  minWidth: '300px',
  position: 'absolute',
  maxWidth: '400px',
  boxShadow: '0 0 5px 1px rgba(0, 0, 0, 0.2)',
  animation: `${entry} 0.3s ease-in-out`,
  top: '30px',
  transform: 'translateX(-30%)',
  width: '100%',
  zIndex: '9999',
  opacity: 0,
  pointerEvents: 'none',
  transition: 'all 0.2s ease',

  '&::before': {
    content: '',
    background: 'transparent',
    height: '10px',
    bottom: '20px',
    width: '100%',
    top: '0',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%) translateY(-100%) rotateZ(180deg)',
  },

  variants: {
    isActive: {
      true: {
        pointerEvents: 'all',
        opacity: 1,
      },
    },
  },
});
