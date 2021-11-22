import { Link } from 'react-router-dom';
import { styled } from '../../../styles/Theme.provider';

export const UserInfoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content !important',
  svg: {
    marginRight: '10px',
  },
});

export const DropdownLink = styled(Link, {
  display: 'flex',
  backgroundColor: 'transparent',
  color: '$gray9',
  textDecoration: 'none',
  padding: '10px',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    color: '$gray12',
  },
});

export const UserDataContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  borderTop: '1px solid $gray5',
  padding: '5px',
});
