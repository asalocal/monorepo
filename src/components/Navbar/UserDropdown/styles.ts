import Link from 'next/link';
import { styled } from '../../../styles/Theme.provider';

export const UserInfoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content !important',
  svg: {
    marginRight: '10px',
  },
});

export const Content = styled('div', {
  padding: '10px',
});

export const DropdownLink = styled('a', {
  display: 'flex',
  backgroundColor: 'transparent',
  color: '$gray9',
  textDecoration: 'none',
  padding: '10px',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    color: '$gray12',
    backgroundColor: '$gray3',
  },
});

export const UserDataContainer = styled('div', {
  display: 'flex',
  marginTop: '10px',
  justifyContent: 'space-between',
  borderTop: '1px solid $gray5',
  padding: '5px',
});
