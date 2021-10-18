import { useEffect } from 'react';
import SignIn from './pages/SignIn';
import BYTGlobalCSS from './styles/BYT.global';

function App() {
  useEffect(() => {
    BYTGlobalCSS();
  }, []);

  return (
    <>
      <SignIn />
    </>
  );
}

export default App;
