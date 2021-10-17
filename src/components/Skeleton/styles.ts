import { styled, keyframes } from '../../styles/Theme.provider';

const LoadingAnimation = keyframes({
  to: {
    backgroundPosition: '300%',
  },
});

export const SkeletonWrapper = styled('div', {
  display: 'flex',
  backgroundColor: '#C4C4C4',
  borderRadius: '10px',
  overflow: 'hidden',
  position: 'relative',

  '&::after': {
    content: '',
    display: 'block',
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    boxShadow: '0 10px 45px rgba(0, 0, 0, 0.1)',

    backgroundImage:
      'linear-gradient(90deg,rgba(228, 228, 228, 0) 0%, rgb(228, 228, 228) 50%,rgba(228, 228, 228, 0) 100%);',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '50%',
    backgroundPosition: '-150% 0',
    animation: `${LoadingAnimation} 1.5s linear infinite`,
  },
});
