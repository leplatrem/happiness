import React, { Component } from "react";


export default class VotePage extends Component {
  sendVote(note) {
    this.props.submitVote(note);
  }

  render() {
    return (
      <div id="send-vote">
        <button onClick={this.sendVote.bind(this, 1)}>😞</button>
        <button onClick={this.sendVote.bind(this, 5)}>😐</button>
        <button onClick={this.sendVote.bind(this, 10)}>😊</button>
      </div>
    );
  }
}
