import React, { Component } from "react";

import ChartistGraph from "react-chartist";


export default class ChartsPage extends Component {
  render() {
    const {total, chartsData} = this.props;
    const chartOptions = {stackBars: true};
    return (
      <div id="charts">
        <h1>Charts</h1>
        <p>{total} votes</p>
        <ChartistGraph data={chartsData} type={'Bar'} options={chartOptions} />
      </div>
    );
  }
}
