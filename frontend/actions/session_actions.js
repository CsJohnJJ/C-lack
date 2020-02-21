import * as SessionApiUtil from "../util/session_api_util";

// regular actions
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS"


export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
  user
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};



// thunk actions
export const signup = (user) => dispatch => {
    return SessionApiUtil.signup(user)
      .then(user => dispatch(receiveCurrentUser(user)),
        err => dispatch(receiveErrors(err.responseJSON)));
};

export const login = (user) => dispatch => {
    return SessionApiUtil.login(user)
      .then(user => dispatch(receiveCurrentUser(user)),
        err => dispatch(receiveErrors(err.responseJSON)));
};


export const logout = () => {
  return (dispatch) => {
    return SessionApiUtil.logout().then(() => {
      dispatch(logoutCurrentUser());
    });
  };
};

export const demoLogin = () => {
  return (dispatch) => {
    return SessionApiUtil.demoLogin().then(user => {
      dispatch(receiveCurrentUser(user)), err => dispatch(receiveErrors(err.responseJSON));
    });
  };
};