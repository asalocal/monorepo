import Image from 'components/Image';
import { styled } from 'styles/Theme.provider';

export const GalleryImage = styled(Image, {
  width: '35px',
  height: '35px',
  borderRadius: '5px',

  transition: 'all 0.2s ease',

  '&:hover': {
    cursor: 'pointer',
    filter: 'grayscale(50%)',
  },

  variants: {
    order: {
      horizontal: {
        '& + img': {
          marginTop: '0',
          marginLeft: '7px',
        },
      },
      vertical: {
        '& + img': {
          marginTop: '6px',
          marginLeft: '0',
        },
      },
    },
    isActive: {
      true: {
        filter: 'grayscale(0%)',
      },
      false: {
        filter: 'grayscale(100%)',
      },
    },
  },
});
