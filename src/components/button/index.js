import React, { Component } from 'react';
import './index.css'

class Button extends Component {
  render(){
    return(
      <button
        className={this.props.class}
        onClick={(num)=>this.props.handleClick(this.props.value)}>{this.props.value}
      </button>
    )
  }
}

export default Button
