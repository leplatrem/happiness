import React, { Component } from "react";


export default class HomePage extends Component {
  constructor(props) {
    super(props);
    const {title, server, bucket} = this.props;
    // This will store the temporary values of the form.
    this.state = {title, server, bucket};
  }

  createPoll() {
    const {title, server, bucket} = this.state;
    this.props.createPoll(title, server, bucket);
  }

  onChange = (name) => {
    return (event) => {
      this.setState({[name]: event.target.value});
    };
  }

  render() {
    const {title, server, bucket} = this.state;
    return (
      <div id="homepage">
        <h1>Happiness - Satisfaction tracking</h1>
        <p>Simple polls to track satisfaction over time.</p>
        <label>Title <input type="text" placeholder="How was your day?" value={title} onChange={this.onChange("title")}/></label>
        <button type="submit" onClick={this.createPoll.bind(this)}>Create new!</button>
        <fieldset>
          <legend>Advanced options</legend>
          <label>Server <input type="text" value={server} onChange={this.onChange("server")}/></label>
          <label>Bucket <input type="text" value={bucket} onChange={this.onChange("bucket")}/></label>
        </fieldset>
      </div>
    );
  }
}
