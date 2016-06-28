import React, { Component } from "react";


export default class HomePage extends Component {
  constructor(props) {
    super(props);
    const {server, bucket} = this.props;
    this.state = {server, bucket};
  }

  createPoll() {
    this.props.createPoll(this.state.server, this.state.bucket);
  }

  onChange(field, event) {
    this.setState({[field]: event.target.value});
  }

  render() {
    return (
      <div id="homepage">
        <h1>Happiness - Satisfaction tracking</h1>
        <p>Simple polls to track satisfaction over time.</p>
        <button type="submit" onClick={this.createPoll.bind(this)}>Create new!</button>
        <fieldset>
          <legend>Advanced options</legend>
          <label>Server <input type="text" value={this.state.server} onChange={this.onChange.bind(this, "server")}/></label>
          <label>Bucket <input type="text" value={this.state.bucket} onChange={this.onChange.bind(this, "bucket")}/></label>
        </fieldset>
      </div>
    );
  }
}
