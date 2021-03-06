import React, { Component } from "react";
import { connect } from "react-redux";

import Pinga from "../Presentational/Pinga";

import { logoutUser, getPingaFirebase, setPingaFirebase } from "../../actions";

class PingaContainer extends Component {
  componentDidMount() {
    this.props.getPinga();
  }

  updatePingas = pingas => {
    this.props.setPinga(pingas);
  };

  render() {
    return (
      <Pinga
        logoutUser={this.props.logoutUser}
        pingas={this.props.pingas}
        users={this.props.users}
        loggedUser={this.props.user}
        updatePingas={this.updatePingas}
      />
    );
  }
}

const mapStateToProps = state => ({
  pingas: state.pinga.pingas,
  users: state.pinga.users,
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser()),
  getPinga: () => dispatch(getPingaFirebase()),
  setPinga: pinga => dispatch(setPingaFirebase(pinga))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PingaContainer);
