import { Wrapper, WrapperVariants } from './styles';

export type ContainerProps = {
  children: React.ReactNode;
} & WrapperVariants;

function Container({ children, fullWidth = true, ...props }: ContainerProps) {
  return (
    <>
      <Wrapper fullWidth={fullWidth} {...props}>
        {children}
      </Wrapper>
    </>
  );
}

export default Container;
