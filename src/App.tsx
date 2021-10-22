import { useEffect } from 'react';
import BYTGlobalCSS from './styles/BYT.global';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from 'context/AuthContext';
import Routes from 'routes';

function App() {
  useEffect(() => {
    BYTGlobalCSS();
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;
