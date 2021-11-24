import { styled } from '../../../styles/Theme.provider';

import IntroBackground from '../../../assets/introbackground.svg';

export const IntroductionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  maxHeight: '600px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundImage: `url(${IntroBackground})`,
});

export const IntroductionContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '1240px',
  width: '100%',
  height: '100%',
  margin: '0 auto',
});

export const TitleContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  height: '100%',

  h1: {
    fontWeight: '500',
    fontSize: '36px',
    color: '$gray1',
  },
  h5: {
    color: '$gray5',
    fontWeight: '500',
  },
});
