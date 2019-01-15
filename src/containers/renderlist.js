import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



class RenderList extends Component {
  state = {
      items:
        [
          {id: 1, text: "text 1", num: 10, bool: true },
          {id: 2, text: "text 2", num: 20, bool: false },
          {id: 3, text: "text 3", num: 30, bool: true }
        ]
    }


  render() {
    return (
      <div>
      {this.state.items.map(list_item =>
        <div key={list_item.id}>
          <Link to={{pathname:'/listitem/' + list_item.id, state:{list_item} }} style={{marginTop: '25px', padding: '5px'}}>
            List Item {list_item.id}
          </Link>
          <br />
          <br />
        </div>
        )}
      </div>
    )}
}

function mapStateToProps(state) {
  return {

  }
}


export default connect(mapStateToProps)(RenderList);
