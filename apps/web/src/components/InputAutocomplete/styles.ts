import Flex from 'components/Flex';
import { styled } from '@kaiju-ui/theme';

export const OptionsContainer = styled(Flex, {
  position: 'absolute',
  borderRadius: '10px',
  zIndex: '10',

  boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.25)',
});
