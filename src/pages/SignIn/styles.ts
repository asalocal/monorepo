import { styled } from '../../styles/Theme.provider';

import SignInBackground from '../../assets/signin-background.png';

export const Container = styled('div', {
  height: '100vh',
  display: 'flex',
  alignItems: 'stretch',
});

export const Content = styled('div', {
  display: 'flex',
  height: '100%',
  backgroundColor: '$primary',
  maxWidth: '800px',
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

  button: {
    marginTop: 20,
  },

  img: {
    width: '60%',
    marginBottom: 40,
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
  backgroundImage: `url(${SignInBackground})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
});
