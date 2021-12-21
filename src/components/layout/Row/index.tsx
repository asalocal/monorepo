import { forwardRef } from 'components/system/forwardRef';
import { ForwardedRef } from 'react';
import { BYTCSS } from 'styles/Theme.provider';
import { Wrapper, WrapperVariants } from './styles';

export type RowProps = {
  children?: React.ReactNode;
  css?: BYTCSS;
} & WrapperVariants;

const Row = forwardRef(
  (
    { children, align, css, ...props }: RowProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => (
    <Wrapper align={align} ref={ref} css={css} {...props}>
      {children}
    </Wrapper>
  )
);

export default Row;
