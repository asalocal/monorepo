import { orange, blue, tomato, gray } from '@radix-ui/colors';

const BYT = {
  colors: {
    primary: '#FF5C00',
    secondary: '#125FB3',
    background: '#fff',

    textLight: '#fff',
    ...orange,
    ...blue,
    ...tomato,
    ...gray,
  },

  media: {
    mobile: '@media (min-width: 768px)',
    tablet: '@media (min-width: 1024px)',
    desktop: '@media (min-width: 1440px)',
  },
};

export default BYT;
