import {
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
  return <ReactDOMRoute {...rest} component={Component} />;
}

export default Route;
