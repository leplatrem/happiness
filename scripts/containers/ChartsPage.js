import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ChartsPage from "../components/ChartsPage";
import { getAccumulatedVotes } from "../reducers";


function mapStateToProps(state) {
  const { total, chartsData } = getAccumulatedVotes(state);
  return {
    total,
    chartsData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartsPage);
