import { orange, blue, tomato, gray, green } from '@radix-ui/colors';

const BYT = {
  colors: {
    primary: '#FF5C00',
    secondary: '#125FB3',
    background: '#fff',

    primaryHover: '#DD5000',

    textLight: '#fff',
    ...green,
    ...orange,
    ...blue,
    ...tomato,
    ...gray,
  },

  media: {
    sm: '(min-width: 768px)',
    md: '(min-width: 1024px)',
    lg: '(min-width: 1440px)',
  },
};

export default BYT;
