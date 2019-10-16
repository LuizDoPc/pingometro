import React, { Component } from "react";
import { connect } from "react-redux";

import Pinga from "../Presentational/Pinga";

import { logoutUser, getPinga, setPinga } from "../../actions";

class PingaContainer extends Component {
  componentDidMount() {
    this.props.getPinga();
  }

  render() {
    return <Pinga logoutUser={this.props.logoutUser} />;
  }
}

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser()),
  getPinga: () => dispatch(getPinga())
});

export default connect(
  null,
  mapDispatchToProps
)(PingaContainer);
