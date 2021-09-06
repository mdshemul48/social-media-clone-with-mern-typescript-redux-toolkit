import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { UserReducer } from '../types/userReducer';
const LoginRoute: React.FC<{ path: string; component: React.FC }> = (props) => {
  const { path, component } = props;
  const { user } = useSelector(
    (state: { userState: UserReducer }) => state.userState
  );
  return user ? (
    <Redirect to="/" />
  ) : (
    <Route path={path} component={component} exact />
  );
};

export default LoginRoute;
