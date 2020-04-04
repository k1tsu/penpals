import React from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import StyledForm from './styles';
import { loginUser } from '../../redux/actions/authActions';

const LoginForm = ({ auth, dispatch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser());
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      { auth.isAuthenticated && <Redirect to="/" /> }
      <GoogleLoginButton />
    </StyledForm>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(LoginForm);
