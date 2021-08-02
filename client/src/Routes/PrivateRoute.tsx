import { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PrivateRouteInterface } from '../types/RoutesInterface';

const PrivateRoute: FC<PrivateRouteInterface> = (props) => {
  const { path, component } = props;
  //   dummy user
  const user = true;
  return user ? (
    <Route path={path} component={component} />
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;
