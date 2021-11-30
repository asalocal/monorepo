import { BYTCSS } from 'styles/Theme.provider';
import { Wrapper, WrapperVariants } from './styles';

export type ContainerProps = {
  children: React.ReactNode;
  css?: BYTCSS;
} & WrapperVariants;

function Container({
  children,
  fullWidth = false,
  css,
  ...props
}: ContainerProps) {
  return (
    <>
      <Wrapper fullWidth={fullWidth} css={css} {...props}>
        {children}
      </Wrapper>
    </>
  );
}

export default Container;
