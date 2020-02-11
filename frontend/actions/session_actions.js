import * as SessionApiUtil from "../util/session_api_util";

// regular actions
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})

export const removeErrors = () => ({
  type: REMOVE_ERRORS,
});


// thunk actions
export const login = user => dispatch => {
    return SessionApiUtil.login(user).then(user => dispatch(receiveCurrentUser(user)));
};

export const logout = () => dispatch => {
  return SessionApiUtil.logout().then(user => dispatch(logoutCurrentUser()));
};

export const signup = user => dispatch =>
    SessionApiUtil.signup(user).then(user => dispatch(receiveCurrentUser(user))
);