import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import HomePage from "../components/HomePage";
import * as PollActions from "../actions/poll";


function mapStateToProps(state) {
  return {
    server: "https://kinto-leplatrem.herokuapp.com/v1",
    bucket: "happiness"
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PollActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
