import { NavbarProvider } from 'context/NavbarContext';
import Home from 'pages/Home';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import { Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from 'context/AuthContext';
import Route from './Route';

function Routes() {
  return (
    <Switch>
      <Route path="/signup" component={SignUp} />
      <Route path="/signIn" component={SignIn} />
      <AuthProvider>
        <NavbarProvider>
          <PrivateRoute path="/" component={Home} isPrivate exact />
        </NavbarProvider>
      </AuthProvider>
    </Switch>
  );
}

export default Routes;
