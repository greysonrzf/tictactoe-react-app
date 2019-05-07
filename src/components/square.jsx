import React, { Component } from "react";

import "./square.css";

export default class Square extends Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.handleClick(this.props.indice)}
      >
        {this.props.value}
      </button>
    );
  }
}
