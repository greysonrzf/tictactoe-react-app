import React, { Component } from "react";

import Player from "./player";
import Square from "./square";
import Start from "./start";
import "./board.css";

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "X",
      values: Array(9).fill(null),
      marked: Array(9).fill(false),
      fields: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      banner: "Next Player",
      hall: []
    };
  }

  handleClick = indice => {
    if (!this.state.marked[indice]) {
      const values = this.state.values.slice();
      values[indice] = this.state.content;
      const marked = this.state.marked.slice();
      marked[indice] = true;
      this.setState({
        content: this.state.content === "X" ? "O" : "X",
        values: values,
        marked: marked
      });
      const content = this.state.content;
      if (
        (values[0] === content &&
          values[1] === content &&
          values[2] === content) ||
        (values[3] === content &&
          values[4] === content &&
          values[5] === content) ||
        (values[6] === content &&
          values[7] === content &&
          values[8] === content) ||
        (values[0] === content &&
          values[3] === content &&
          values[6] === content) ||
        (values[1] === content &&
          values[4] === content &&
          values[7] === content) ||
        (values[2] === content &&
          values[5] === content &&
          values[8] === content) ||
        (values[0] === content &&
          values[4] === content &&
          values[8] === content) ||
        (values[2] === content &&
          values[4] === content &&
          values[6] === content)
      ) {
        this.setState({
          content: content,
          marked: Array(9).fill(true),
          banner: "Winner",
          hall: [...this.state.hall, content]
        });
      }
    }
  };

  handleStart = () => {
    this.setState({
      content: "X",
      values: Array(9).fill(null),
      marked: Array(9).fill(false),
      banner: "Next Player"
    });
  };

  render() {
    return (
      <div className="boardContainer">
        <Player text={this.state.banner} next={this.state.content} />
        <div className="board">
          {this.state.fields.map(field => (
            <Square
              key={field}
              value={this.state.values[field]}
              indice={field}
              handleClick={this.handleClick.bind(this)}
            />
          ))}
        </div>
        <Start handleStart={this.handleStart.bind(this)} />
        <div className="history">
          <h2>Winners:</h2>
          <ol>
            {this.state.hall.map((jogador, indice) => (
              <li key={indice}>Player: {jogador}</li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
