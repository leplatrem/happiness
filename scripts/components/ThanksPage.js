import React, { Component } from "react";


export default class ThanksPage extends Component {
  render() {
    return (
      <div id="thanks">
        <h1>{this.props.langs.map((l) => <span>{l}</span>)}</h1>
      </div>
    );
  }
}
