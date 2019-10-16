import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { loginUser } from "../../actions";

import Login from "../Presentational/Login";

class LoginContainer extends React.Component {
  render() {
    const { loginError, isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/" />;
    } else {
      return <Login loginUser={this.props.loginUser} loginError={loginError} />;
    }
  }
}

const mapStateToProps = state => {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => ({
  loginUser: (email, senha) => dispatch(loginUser(email, senha))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
