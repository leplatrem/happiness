import React, { Component } from "react";
import { Link } from "react-router";


export default class App extends Component {
  render() {
    const {
      busy,
      error,
      content,
    } = this.props;
    return (
      <div>
        {busy ? <div className="loader"></div> : ""}
        {error ? <div className="error toast">{error.message}</div> : ""}
        <main className="container">
          {content || <p>Default.</p>}
        </main>
        <footer className="page-footer">
          <div className="container">
            <Link className="btn waves-effect waves-light red lighten-3" to={`/`}>Create your poll</Link>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2016 Powered by <a className="grey-text text-lighten-3" href="https://kinto.readthedocs.io">Kinto</a>
            <a className="grey-text text-lighten-4 right" href="https://github.com/leplatrem/happiness">
              Source code
            </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
