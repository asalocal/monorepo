import { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import { Wrapper, WrapperVariants } from './styles';

export type ColProps = {
  children: React.ReactNode;
} & WrapperVariants &
  HTMLAttributes<HTMLDivElement>;

const Col = forwardRef(
  (
    { sm, md, lg, children, ...props }: ColProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => (
    <Wrapper sm={sm} md={md} lg={lg} ref={ref} {...props}>
      {children}
    </Wrapper>
  )
);

export default Col;
