import React, { Component } from "react";

import "./start.css";

export default class Start extends Component {
  render() {
    return (
      <button id="start" onClick={this.props.handleStart}>
        Restart
      </button>
    );
  }
}
