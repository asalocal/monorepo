import Button from 'components/Button';
import Flex from 'components/Flex';
import { styled } from 'styles/Theme.provider';

export const PopContainer = styled(Flex, {
  backgroundColor: '$gray1',
  boxShadow: '0 0 5px 2px rgba(0,0,0, 0.2)',
  borderBottom: '2px solid $primary',
  position: 'fixed',
  bottom: '10px',
  right: '10px',
  maxWidth: '400px',
  width: '100%',
  padding: '15px',
  borderRadius: '5px',
  zIndex: '99999',
});

export const LocationButton = styled(Button, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '70px',

  svg: {
    fontSize: '30px',
    marginRight: '15px',
  },
});

export const LocationBadge = styled(Flex, {
  position: 'absolute',
  width: '25px',
  height: '25px',
  marginTop: -15,
  marginLeft: '10px',
  borderRadius: '50%',
  backgroundColor: 'red',
  color: '$gray1',
});
