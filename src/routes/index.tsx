import Home from 'pages/Home';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import { Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Route from './Route';

function Routes() {
  return (
    <Switch>
      <Route path="/signup" component={SignUp} />
      <Route path="/signIn" component={SignIn} />
      <PrivateRoute path="/" component={Home} isPrivate exact />
    </Switch>
  );
}

export default Routes;
