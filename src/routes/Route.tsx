import { useAuth } from 'context/AuthContext';
import {
  Redirect,
  Route as ReactDOMRoute,
  RouteProps as ReactRouteProps,
} from 'react-router-dom';

interface RouteProps extends ReactRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

function Route({
  isPrivate = false,
  component: Component,
  ...rest
}: RouteProps) {
  const { user } = useAuth();
  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return user ? <Redirect to="/" /> : <Component />;
      }}
    />
  );
}

export default Route;
