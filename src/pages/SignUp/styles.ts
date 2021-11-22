import { InputContainer } from 'components/Input/styles';
import { styled } from '../../styles/Theme.provider';

export const Container = styled('div', {
  height: '100vh',
  display: 'flex',
  alignItems: 'stretch',
});

export const Content = styled('div', {
  display: 'flex',
  height: '100%',
  backgroundColor: '$primary',
  width: '100%',
  justifyContent: 'center',
  padding: 10,
});

export const ContentWrapper = styled('div', {
  maxWidth: '324px',
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  button: {
    marginTop: 20,
    width: '100%',
  },

  form: {
    [`${InputContainer} + ${InputContainer}`]: {
      margin: '20px 0',
    },
  },

  img: {
    width: '60%',
    margin: '0 auto 35px auto',
  },

  span: {
    color: '$textLight',
    marginTop: 30,
    fontSize: '0.7rem',
    width: '100%',
    textAlign: 'center',
    a: {
      color: '$textLight',
    },
  },
});

export const Background = styled('div', {
  flex: 1,
  height: '100%',
  backgroundImage: `url("https://source.unsplash.com/random")`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
});
