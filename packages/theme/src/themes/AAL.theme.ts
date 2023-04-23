import { orange, blue, tomato, gray, green } from '@radix-ui/colors';

const BYT = {
  colors: {
    primary: '#FF5C00',
    secondary: '#125FB3',
    background: '#fff',

    backgroundAlternative: '#fff',
    backgroundPrimary: '#FF5C00',
    backgroundSecondary: '#FF5C00',

    primaryHover: '#a6440d',
    text: '#333333',
    textAlternative: '#C4C4C4',
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
