import React, { Component } from "react";

import "./player.css";

export default class Player extends Component {
  render() {
    return (
      <div className="player">
        {this.props.text}: {this.props.next}
      </div>
    );
  }
}
