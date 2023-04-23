import { orange, blue, tomato, gray, green } from '@radix-ui/colors';

const DarkTheme = {
  colors: {
    primary: '#FF5C00',
    primaryHover: '#DD5000',

    secondary: '#125FB3',
    background: '#fff',

    backgroundAlternative: '#282828',
    backgroundPrimary: '#282828',
    backgroundSecondary: '#161616',

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

export default DarkTheme;
