import { styled } from '@kaiju-ui/theme';
import Image from 'components/Image';

export const ProductCardContainer = styled('div', {
  maxWidth: '325px',
  width: '100%',
  position: 'relative',

  p: {
    textAlign: 'justify',
    textJustify: 'distribute',
    marginTop: '10px',
  },

  h2: {
    fontSize: '20px',
  },
});

export const ProductCardImage = styled(Image, {
  width: '100%',
  height: '325px',
  borderRadius: '10px',
  objectFit: 'cover',
});
