import {
  HomeIcon,
  SewingPinFilledIcon,
  SewingPinIcon,
} from '@modulz/radix-icons';

export const MenuNavbar = [
  {
    label: 'Home',
    icon: HomeIcon,
    path: '/',
  },
  {
    label: 'Your Trips',
    icon: SewingPinFilledIcon,
    path: '/trips',
  },
  {
    label: 'Create a Trip',
    icon: SewingPinIcon,
    path: '/trips/create',
  },
];
