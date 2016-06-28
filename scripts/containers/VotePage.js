import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import VotePage from "../components/VotePage";
import * as PollActions from "../actions/poll";


function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PollActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VotePage);
