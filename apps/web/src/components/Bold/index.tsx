interface IBoldProps {
  children: React.ReactNode;
}
function Bold({ children }: IBoldProps) {
  return <b>{children}</b>;
}

export default Bold;
