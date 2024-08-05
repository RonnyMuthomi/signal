//import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const isLoggedIn = !!localStorage.getItem('token');

  return isLoggedIn ? <Element {...rest} /> : <Navigate to="/LoginModal" />;
};

ProtectedRoute.propTypes = {
  element: PropTypes.elementType.isRequired
};

export default ProtectedRoute;
