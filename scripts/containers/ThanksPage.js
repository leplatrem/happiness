import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ThanksPage from "../components/ThanksPage";


function mapStateToProps(state) {
  return {
    note: state.poll.note
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThanksPage);
