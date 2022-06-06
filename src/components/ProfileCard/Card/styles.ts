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

  '&::before': {
    content: '',
    borderStyle: 'solid',
    borderColor: '#ffff transparent',
    borderWidth: '6px 6px 0 6px',
    bottom: '20px',
    top: '0',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%) translateY(-100%) rotateZ(180deg)',
  },
});
