import React, { Component } from "react";
import { Link } from "react-router";


export default class PollPage extends Component {
  render() {
    const {
      title,
      voteUrl,
      votePath,
      chartsUrl,
      chartsPath
    } = this.props;
    return (
      <div id="poll-details">
        <h1>Poll created!</h1>
        <p>{title}</p>
        <p>Save these URL:</p>
        <li>Vote <input type="text" value={voteUrl} readOnly="true"/><Link target="blank" to={votePath}>Go</Link></li>
        <li>Results <input type="text" value={chartsUrl} readOnly="true"/><Link target="blank" to={chartsPath}>Go</Link></li>
      </div>
    );
  }
}
