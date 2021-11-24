import { Wrapper, WrapperVariants } from './styles';

export type RowProps = {
  children?: React.ReactNode;
} & WrapperVariants;

function Row({ children, align, ...props }: RowProps) {
  return (
    <Wrapper align={align} {...props}>
      {children}
    </Wrapper>
  );
}

export default Row;
