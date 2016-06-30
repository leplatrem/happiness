import React, { Component } from "react";


export default class ThanksPage extends Component {
  render() {
    return (
      <div id="thanks" className="valign-wrapper">
        <h3 className="valign">{this.props.langs.map((l) => <span>{l}</span>)}</h3>
      </div>
    );
  }
}
