import { BYTCSS } from '@kaiju-ui/theme';
import { GridItemContainer } from './styles';

interface GridItemProps {
  children: React.ReactNode;
  area: string;
  css?: BYTCSS;
}

function GridItem({ children, css, area }: GridItemProps) {
  return (
    <GridItemContainer css={{ ...css, gridArea: area }}>
      {children}
    </GridItemContainer>
  );
}

export default GridItem;
