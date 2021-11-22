import { NavbarProvider } from 'context/NavbarContext';
import Home from 'pages/Home';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import { Switch, Route } from 'react-router-dom';
import { AuthProvider } from 'context/AuthContext';

function Routes() {
  return (
    <Switch>
      <AuthProvider>
        <NavbarProvider>
          <Route path="/" component={Home} exact />
        </NavbarProvider>
        <Route path="/signup" component={SignUp} />
        <Route path="/signIn" component={SignIn} />
      </AuthProvider>
    </Switch>
  );
}

export default Routes;
