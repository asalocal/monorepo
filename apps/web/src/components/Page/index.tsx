import Navbar from 'components/Navbar';

interface PageProps {
  children: React.ReactNode;
}

function Page({ children }: PageProps) {
  return (
    <>
      <Navbar orientation="horizontal" backgroundColor="transparent" />
      {children}
    </>
  );
}

export default Page;
