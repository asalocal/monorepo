import { styled } from '@kaiju-ui/theme';

import { InputContainer } from 'components/Input/styles';

export const Container = styled('div', {
  height: '100vh',
  display: 'flex',
  alignItems: 'stretch',
});

export const Content = styled('div', {
  display: 'flex',
  height: '100%',
  backgroundColor: '$backgroundPrimary',
  width: '100%',
  justifyContent: 'center',
  padding: 10,
});

export const ContentWrapper = styled('div', {
  maxWidth: '324px',
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',

  form: {
    width: '100%',

    [`${InputContainer}`]: {
      marginBottom: '20px',
    },
  },

  button: {
    marginTop: 20,
  },

  span: {
    color: '$textLight',
    marginTop: 30,
    fontSize: '0.7rem',
    a: {
      color: '$textLight',
    },
  },
});

export const Background = styled('div', {
  flex: 1,
  height: '100%',
  backgroundImage: `url(/assets/signin-background.png)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
});
