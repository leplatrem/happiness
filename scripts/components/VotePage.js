import React, { Component } from "react";
import { UNHAPPY, NEUTRAL, HAPPY } from "../constants";


export default class VotePage extends Component {
  sendVote(note) {
    return () => {
      this.props.submitVote(note);
    };
  }

  render() {
    const {title} = this.props;
    return (
      <div>
        <h2 className="center-align">{title}</h2>
        <div className="row">
          <button className="vote unhappy col s12 m4 l4" onClick={this.sendVote(UNHAPPY)}>😞</button>
          <button className="vote neutral col s12 m4 l4" onClick={this.sendVote(NEUTRAL)}>😐</button>
          <button className="vote happy col s12 m4 l4" onClick={this.sendVote(HAPPY)}>😊</button>
        </div>
      </div>
    );
  }
}
