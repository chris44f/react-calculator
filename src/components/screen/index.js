import React, { Component } from 'react';
import './index.css'

class Screen extends Component {
  render(){
    return(
      <table className="screen-container">
        <tr>{this.props.loggedValue}</tr>
        <tr>{this.props.value}</tr>
      </table>
    )
  }
}

export default Screen
