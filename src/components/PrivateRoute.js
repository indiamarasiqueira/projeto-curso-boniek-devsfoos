import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, ...res }) => {
  let history = useHistory();
  const token = useSelector((state) => state.user.token);

  if (!token || token === '') {
    history.push('/login');
    return null;
  }

  return <Route {...res}>{children}</Route>;
};

export default PrivateRoute;

// rotas privadas
