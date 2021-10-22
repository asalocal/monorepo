import {
  Route as ReactDOMRoute,
  RouteProps as ReactRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

interface RouteProps extends ReactRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

function PrivateRoute({ component: Component, ...rest }: RouteProps) {
  const { user } = useAuth();

  console.log(!!user);

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return !!user ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: '/signin', state: { from: location } }} />
        );
      }}
    />
  );
}

export default PrivateRoute;
