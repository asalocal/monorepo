import { BYTCSS } from 'styles/Theme.provider';
import { FlexVariants, FlexWrapper } from './styles';

type FlexProps = {
  children: React.ReactNode;
  css?: BYTCSS;
} & FlexVariants;

function Flex({
  children,
  alignItems = 'normal',
  alignContent = 'start',
  flexWrap = 'nowrap',
  justifyContent = 'normal',
  direction = 'row',
  css,
}: FlexProps) {
  return (
    <FlexWrapper
      alignItems={alignItems}
      alignContent={alignContent}
      flexWrap={flexWrap}
      css={css}
      direction={direction}
      justifyContent={justifyContent}
    >
      {children}
    </FlexWrapper>
  );
}

export default Flex;
