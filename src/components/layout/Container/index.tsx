import { forwardRef } from 'components/system/forwardRef';
import { ForwardedRef, HTMLAttributes } from 'react';
import { BYTCSS } from 'styles/Theme.provider';
import { Wrapper, WrapperVariants } from './styles';

export type ContainerProps = {
  children: React.ReactNode;
  css?: BYTCSS;
} & WrapperVariants &
  HTMLAttributes<HTMLDivElement>;

const Container = forwardRef(
  (
    { children, fullWidth = false, css, ...props }: ContainerProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => (
    <>
      <Wrapper fullWidth={fullWidth} css={css} ref={ref} {...props}>
        {children}
      </Wrapper>
    </>
  )
);

export default Container;
