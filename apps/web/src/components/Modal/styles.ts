import Flex from 'components/Flex';
import { styled, keyframes } from '@kaiju-ui/theme';

const slideLeft = keyframes({
  '0%': {
    transform: 'translateX(100%)',
  },
  '100%': {
    transform: 'translateX(0%)',
  },
});

const fadeIn = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
});

export const ModalContainer = styled(Flex, {
  width: '100%',
  maxWidth: '840px',
  height: '100%',
  maxHeight: '300px',
  position: 'absolute',
  backgroundColor: '$gray1',
  borderRadius: '10px',
  zIndex: '99',

  padding: '0 10px 10px 10px',
  pointerEvents: 'painted',

  variants: {
    position: {
      top: {
        top: 0,
        left: 0,
        transform: 'translate(0, 0)',
        maxWidth: '100%',
        borderRadius: '0 0 10px 10px',
      },
      bottom: {
        bottom: 0,
        left: 0,
        transform: 'translateX(0) translateY(65%)',
        maxWidth: '100%',
        borderRadius: '10px 10px 0 0',
      },
      middle: {
        top: '50%',
        animation: `${fadeIn} 0.3s ease`,
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
      right: {
        top: 0,
        animation: `${slideLeft} 0.3s ease-in-out`,
        right: '0 !important',
        height: '100%',
        maxHeight: '100%',
        maxWidth: '500px',
        borderRadius: '0',
        transform: 'translate(0, 0)',
      },
      left: {
        left: 0,
        top: 0,
        height: '100%',
        maxHeight: '100%',
        borderRadius: '0 ',
        maxWidth: '500px',
        transform: 'translate(0, 0)',
      },
    },
  },
});

export const ModalHeader = styled(Flex, {
  width: '100%',
  padding: '10px 5px',
  color: '$gray9',
  borderBottom: '1px solid $gray5',
  marginBottom: '10px',
});
