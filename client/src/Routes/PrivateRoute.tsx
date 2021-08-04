import { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PrivateRouteInterface } from '../types/RoutesInterface';
import { UserReducer } from '../types/userReducer';
import { useSelector } from 'react-redux';
const PrivateRoute: FC<PrivateRouteInterface> = (props) => {
  const { path, component } = props;
  const { user } = useSelector(
    (state: { userState: UserReducer }) => state.userState
  );
  return user ? (
    <Route path={path} component={component} exact />
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;
