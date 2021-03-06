import React, { Component } from "react";

import ChartistGraph from "react-chartist";


export default class ChartsPage extends Component {
  render() {
    const {title, total, chartsData} = this.props;
    const chartOptions = {stackBars: true};
    return (
      <div id="charts">
        <h1>Charts</h1>
        <h3>{title}</h3>
        <p>{total} votes</p>
        <ChartistGraph data={chartsData} type={'Bar'} options={chartOptions} />
      </div>
    );
  }
}
