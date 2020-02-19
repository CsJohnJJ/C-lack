import { connect } from "react-redux";
import React from "react";
import { login, clearErrors, demoLogin } from "../../actions/session_actions";
import SessionForm from "./session_form";


const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Login",
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    demoLogin: () => dispatch(demoLogin()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
