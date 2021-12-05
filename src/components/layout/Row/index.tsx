import { forwardRef } from 'components/system/forwardRef';
import { ForwardedRef } from 'react';
import { Wrapper, WrapperVariants } from './styles';

export type RowProps = {
  children?: React.ReactNode;
} & WrapperVariants;

const Row = forwardRef(
  (
    { children, align, ...props }: RowProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => (
    <Wrapper align={align} ref={ref} {...props}>
      {children}
    </Wrapper>
  )
);

export default Row;
