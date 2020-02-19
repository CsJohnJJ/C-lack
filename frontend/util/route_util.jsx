import React from 'react';
import { Redirect, withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (<Component {...props} />) : (<Redirect to="/main/channels/1" />)
  )} />
);



const Protected = ({ component: Component, path, loggedIn }) => (
  <Route
  path={path}
  render={props =>
    loggedIn ? <Component {...props} /> : <Redirect to="/login" />
  }
  />
  );
  
  
  const mapStateToProps = state => {
    return { 
      loggedIn: Boolean(state.session.id),
      currentUser: state.entities.users[state.session.id] 
    };
  };

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
