import React, { Component } from "react";
import { Link } from "react-router";


export default class PollPage extends Component {
  selectOnFocus(e) {
    const target = e.target;
    setTimeout(() => target.select(), 0);
  }

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
        <h3>Your poll {title ? `«${title}» ` : ""}was created!</h3>
        <p>You can now save and share the following links:</p>
        <div className="section">
          <h5>Voting page</h5>
          <input onFocus={this.selectOnFocus} type="text" value={voteUrl} readOnly="true"/>
          <Link className="btn" target="blank" to={votePath}>Go</Link>
        </div>
        <div className="section">
          <h5>Charts page</h5>
          <input onFocus={this.selectOnFocus} type="text" value={chartsUrl} readOnly="true"/>
          <Link className="btn" target="blank" to={chartsPath}>Go</Link>
        </div>
      </div>
    );
  }
}
