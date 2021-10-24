import { useEffect } from 'react';
import BYTGlobalCSS from './styles/BYT.global';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes';

function App() {
  useEffect(() => {
    BYTGlobalCSS();
  }, []);

  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
