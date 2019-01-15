import React, { Component } from 'react';
import history from './history';
import * as ACTIONS from '../store/actions/actions';
import { connect } from 'react-redux'



class AuthCheck extends Component {
  componentDidMount() {
    if(this.props.auth.isAuthenticated()) {
      this.props.login_success()
      this.props.add_profile(this.props.auth.userProfile)
      history.replace('/')
    }
    else {
      this.props.login_failure()
      this.props.remove_profile()
      history.replace('/')
    }
  }

  render() {
    return(
        <div>
        </div>
    )}
}

function mapStateToProps (state) {
  return {

  }
}

function mapDispatchToProps (dispatch) {
  return {
    login_success: () => dispatch(ACTIONS.login_success()),
    login_failure: () => dispatch(ACTIONS.login_failure()),
    add_profile: (profile) => dispatch(ACTIONS.add_profile(profile)),
    remove_profile: () => dispatch(ACTIONS.remove_profile())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthCheck);
