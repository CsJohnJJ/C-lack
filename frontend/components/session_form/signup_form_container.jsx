import { connect } from "react-redux";
import React from "react";
import { signup, demoLogin, clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Sign Up",
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),demoLogin: () => dispatch(demoLogin()),clearErrors: () => dispatch(clearErrors())
    
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
