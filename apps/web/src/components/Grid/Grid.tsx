import { BYTCSS } from '@kaiju-ui/theme';
import { GridContainer } from './styles';

interface GridProps {
  children: React.ReactNode;
  columns: string;
  rows: string;
  columnGap?: string;
  rowGap?: string;
  css?: BYTCSS;
}

function Grid({
  children,
  columns,
  rows,
  columnGap = '0',
  css,
  rowGap = '0',
}: GridProps) {
  return (
    <GridContainer
      css={{
        ...css,
        gridTemplateColumns: columns,
        gridTemplateRows: rows,
        columnGap,
        rowGap,
      }}
    >
      {children}
    </GridContainer>
  );
}

export default Grid;
