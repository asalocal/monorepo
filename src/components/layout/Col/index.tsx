import { Wrapper, WrapperVariants } from './styles';

export type ColProps = {
  children: React.ReactNode;
} & WrapperVariants;

function Col({ sm, md, lg, children, ...props }: ColProps) {
  return (
    <Wrapper sm={sm} md={md} lg={lg} {...props}>
      {children}
    </Wrapper>
  );
}

export default Col;
