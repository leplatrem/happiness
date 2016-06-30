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
        <h1>Happiness</h1>
        <p className="flow-text">Simple polls to track satisfaction over time.</p>
        <label>Title <input type="text" placeholder="How was your day?" value={title} onChange={this.onChange("title")}/></label>

        <fieldset>
          <legend>Advanced options</legend>
          <label>Server <input type="text" value={server} onChange={this.onChange("server")}/></label>
          <label>Bucket <input type="text" value={bucket} onChange={this.onChange("bucket")}/></label>
        </fieldset>

        <div className="section center-align">
          <button onClick={this.createPoll.bind(this)} className="btn-large waves-effect waves-light">Create new
            <i className="material-icons right">add</i>
          </button>
        </div>
      </div>
    );
  }
}
