import React, { Component } from "react";

import ChartistGraph from "react-chartist";


export default class ChartsPage extends Component {
  render() {
    return (
      <div id="charts">
        <h1>Charts</h1>
        <p>{this.props.nbVotes} votes</p>
        <ChartistGraph data={this.props.chartsData} type={'Bar'} options={{stackBars: true}} />
      </div>
    );
  }
}
