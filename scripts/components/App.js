import React, { Component } from "react";
import { Link } from "react-router";


export default class App extends Component {
  render() {
    const {
      content,
    } = this.props;
    return (
      <div>
        <div className="container-fluid main">
          <div className="row">
            <div className="col-sm-12 content">
              {content || <p>Default.</p>}
            </div>
          </div>
          <hr/>
          <p className="text-center">
            <Link to={`/`}>Create poll</Link> - <a href="https://kinto.readthedocs.io">Powered by Kinto</a>
          </p>
        </div>
      </div>
    );
  }
}
