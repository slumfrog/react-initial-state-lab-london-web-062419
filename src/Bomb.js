import React, { Component } from "react";

export default class Bomb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: props.initialCount
    };
  }

  render() {
    return (
      <div>
        {this.state.secondsLeft === 0 ? (
          <p>Boom!</p>
        ) : (
          <p>{this.state.secondsLeft} seconds left before I go boom!</p>
        )}
      </div>
    );
  }
}

// alert (age >= 16) ? "You're allowed to drive!" : "You should be 16 to drive!"
