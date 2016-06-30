import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ThanksPage from "../components/ThanksPage";


function mapStateToProps(state) {
  const langs = [
    "Merci",
    "Thank you",
    "Gracias",
    "Xièxiè",
    "Shukran",
    "Danke",
    "Grazie",
    "Dank u",
    "Gràcies"
  ];
  return {langs};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThanksPage);
