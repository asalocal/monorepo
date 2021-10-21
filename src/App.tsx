import { useEffect } from 'react';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import BYTGlobalCSS from './styles/BYT.global';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
function App() {
  useEffect(() => {
    BYTGlobalCSS();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
