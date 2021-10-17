import { globalCss } from './Theme.provider';

const BYTGlobalCSS = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-web-font-smoothing': 'antialiased',
    fontFamily: 'Poppins',
    background: '$background',
  },

  button: {
    cursor: 'pointer',
  },
});

export default BYTGlobalCSS;
