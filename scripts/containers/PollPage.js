import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import btoa from "btoa";

import PollPage from "../components/PollPage";

function mapStateToProps(state) {
  const {poll} = state.poll;
  const {server, bucket, collection} = poll;
  const payload = btoa(JSON.stringify({server, bucket, collection}));
  const baseUrl = window.location.href.replace(window.location.hash, "");
  return {
    votePath: `/vote/${payload}`,
    chartsPath: `/charts/${payload}`,
    voteUrl: `${baseUrl}#/vote/${payload}`,
    chartsUrl: `${baseUrl}#/charts/${payload}`
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PollPage);
