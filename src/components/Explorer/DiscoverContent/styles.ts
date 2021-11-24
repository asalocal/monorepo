import { styled } from 'styles/Theme.provider';

export const DiscoverContentContainer = styled('div', {
  padding: '0 20px',
  h5: {
    color: '$gray11',
  },

  span: {
    color: '$gray9',
    fontSize: '12px',
  },
});

export const InputContainer = styled('div', {
  display: 'flex',
  marginTop: '10px',

  button: {
    marginLeft: '30px',
    maxWidth: '200px',
  },
});
