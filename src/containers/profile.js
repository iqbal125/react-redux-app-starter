import React, { Component } from 'react';
import { connect } from 'react-redux';


class Profile extends Component {
  RenderProfile = (props) => (
    <div>
      <h1>{props.profile.profile.nickname}</h1>
      <br />
      <img src={props.profile.profile.picture} alt="" />
      <br />
      <h4> {props.profile.profile.email}</h4>
      <br />
      <h5> {props.profile.profile.name} </h5>
      <br />
      <h6> Email Verified: </h6>
      {props.profile.profile.email_verified ? <p>Yes</p> : <p>No</p> }
      <br />
    </div>
  )


  render() {
    return(
      <div>
        <this.RenderProfile profile={this.props.profile} />
      </div>

    )}
}


function mapStateToProps(state) {
  return {
    profile: state.auth_reducer.profile
  }
}

export default connect(mapStateToProps)(Profile);
