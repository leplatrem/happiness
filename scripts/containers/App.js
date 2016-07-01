import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import App from "../components/App";


function mapStateToProps(state) {
  const {busy=false, error=null} = state.session;
  return {
    busy,
    error
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
