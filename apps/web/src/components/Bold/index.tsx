import { BYTCSS } from '@kaiju-ui/theme';
import { BoldContainer } from './styles';

interface IBoldProps {
  children: React.ReactNode;
  css?: BYTCSS;
}

function Bold({ children, css }: IBoldProps) {
  return <BoldContainer css={css}>{children}</BoldContainer>;
}

export default Bold;
