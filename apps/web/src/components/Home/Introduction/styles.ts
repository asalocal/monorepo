import { styled } from '@kaiju-ui/theme';

export const IntroductionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '700px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundImage: `url('/assets/home-image.png')`,
});

export const IntroductionContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '1240px',
  width: '100%',
  height: '100%',
  margin: '60px auto auto auto',
});

export const TitleContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  height: '100%',

  h1: {
    fontWeight: '500',
    fontSize: '42px',
    color: '$gray1',
  },
  h5: {
    color: '$gray5',
    fontWeight: '500',
  },
});
