import React, { Component } from 'react';
import * as ACTIONS from '../store/actions/actions';
import { connect } from 'react-redux';



class Form1 extends Component {

  state ={
    value: ''
  }

  handleChange = (event) => (
    this.setState({value: event.target.value})
  )

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.input_action_creator(event.target.name.value)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> Input </label>
          <input id="name" onChange={this.handleChange} type="text" />
          <button type="submit"> Submit </button>
        </form>
        <br />
        <h3>React State:</h3>
        <p>{this.state.value}</p>
        <br />
        <h3>Redux State:</h3>
        <p>{this.props.user_text}</p>
      </div>
    )}
}


function mapStateToProps(state) {
  return {
    user_text: state.user_reducer.user_text
  }
}

function mapDispatchToProps(dispatch) {
  return {
    input_action_creator: (text) => dispatch(ACTIONS.user_input(text))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Form1);
