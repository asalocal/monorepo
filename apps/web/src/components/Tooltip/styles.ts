import Text from 'components/Text';
import { styled, keyframes } from '@kaiju-ui/theme';

const enter = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(10px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

export const TooltipWrapper = styled(Text, {
  boxShadow: '0 0 10px 2px rgba(0,0,0, 0.2)',
  width: 'fit-content',
  padding: '8px 12px',
  borderRadius: '5px',
  fontSize: '13px',
  zIndex: 1,
  position: 'absolute',
  backgroundColor: '#fff',
  bottom: 'calc(60% + 10px)',
  transform: 'translateY(0)',

  opacity: 0,
  visibility: 'hidden',
  transition: 'all 0.2s ease-in-out',

  '&::before': {
    content: '',
    borderStyle: 'solid',
    borderColor: '#ffff transparent',
    borderWidth: '6px 6px 0 6px',
    bottom: '-5px',
    position: 'absolute',
    transform: 'translateX(-50%)',
    left: '50%',
  },

  variants: {
    active: {
      true: {
        visibility: 'visible',
        animation: `${enter} 0.2s ease-in-out`,
        opacity: 1,
      },
    },
  },
});
