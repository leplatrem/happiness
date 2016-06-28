import React, { Component } from "react";


export default class ThanksPage extends Component {
  render() {
    return (
      <div id="thanks">
        <h1>Thank you! {this.props.note}/10</h1>
      </div>
    );
  }
}
