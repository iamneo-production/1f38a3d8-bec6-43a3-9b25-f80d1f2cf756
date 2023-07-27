import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';

const RouteProtectionUser = ({ children, isAuthenticated, token }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication status on component mount
    if (!isAuthenticated && !localStorage.getItem('token')) {
      navigate('/login'); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, navigate]);

  // Render children only if authenticated
  return isAuthenticated || localStorage.getItem('token') ? children : <Navigate to="/login" />;
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  token: state.auth.token,
});

export default connect(mapStateToProps, null)(RouteProtectionUser);