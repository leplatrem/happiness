import React, { Component } from "react";
import { Link } from "react-router";


export default class PollPage extends Component {
  render() {
    return (
      <div id="poll-details">
        <h1>Poll created!</h1>
        <p>Save these URL:</p>
        <li>Vote <input type="text" value={this.props.voteUrl} readOnly="true"/><Link target="blank" to={this.props.votePath}>Go</Link></li>
        <li>Results <input type="text" value={this.props.chartsUrl} readOnly="true"/><Link target="blank" to={this.props.chartsPath}>Go</Link></li>
      </div>
    );
  }
}
