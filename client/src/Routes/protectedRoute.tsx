import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { UserReducer } from '../types/userReducer';
const PublicRoute: React.FC<{ path: string; component: React.FC }> = (
  props
) => {
  const user = useSelector<UserReducer>((state) => state.user);
  return !user ? (
    <Route path={props.path} component={props.component} />
  ) : (
    <Redirect to="/" />
  );
};

export default PublicRoute;
