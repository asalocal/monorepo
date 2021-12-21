import { orange, blue, tomato, gray, green } from '@radix-ui/colors';

const BYT = {
  colors: {
    primary: '#FF5C00',
    secondary: '#125FB3',
    background: '#fff',

    backgroundAlternative: '#fff',
    backgroundPrimary: '#FF5C00',
    backgroundSecondary: '#FF5C00',

    primaryHover: '#DD5000',
    text: '#333333',
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
