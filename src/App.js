import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import ProtectedRoute from "./Routes";

import Login from "./Components/Containers/LoginContainer";
import Pinga from "./Components/Containers/PingaContainer";

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <Switch>
      <ProtectedRoute exact path="/" component={Pinga} isAuthenticated={isAuthenticated} isVerifying={isVerifying} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}
export default connect(mapStateToProps)(App);
