import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ChartsPage from "../components/ChartsPage";


function mapStateToProps(state) {
  const records = state.charts.records || [];

  const allDays = [];
  const byDays = {1: {}, 5: {}, 10: {}};
  records.forEach((r) => {
    const date = new Date(r.submitted);
    const day = `${date.getMonth() + 1}-${date.getDay()}`;
    if (allDays.indexOf(day) < 0) {
      allDays.push(day);
    }
    byDays[r.note][day] = (byDays[r.note][day] || 0) + 1;
  });

  const sortedDays = allDays.sort();

  const accumulated = {
    labels: sortedDays,
    series: [
      sortedDays.map((d) => (byDays[1][d] || 0)),
      sortedDays.map((d) => (byDays[5][d] || 0)),
      sortedDays.map((d) => (byDays[10][d] || 0)),
    ]
  };

  return {
    nbVotes: records.length,
    chartsData: accumulated
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartsPage);
