import Button from 'components/Button';
import { styled } from './Theme.provider';

export const ViewButton = styled(Button, {
  opacity: 0.3,

  svg: {
    margin: 0,
  },

  '&:hover': {
    opacity: 1,
    color: '$text !important',
  },

  variants: {
    active: {
      true: {
        opacity: 1,
        color: '$primary',
      },
      false: {},
    },
  },
});
