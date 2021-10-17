import { useEffect } from 'react';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import BYTGlobalCSS from './styles/BYT.global';

function App() {
  useEffect(() => {
    BYTGlobalCSS();
  }, []);

  return (
    <>
      <SignUp />
    </>
  );
}

export default App;
