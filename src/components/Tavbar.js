/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logout from './auth/Logout';
import { checkAuth } from '../actions/auth';

const Tavbar = ({ loggedIn }) => {
  const AuthLinks = () => {
    return loggedIn ? (
      <>
        <Logout />
      </>
    ) : (
      <>
        <NavLink exact to="/login">
          <p className="p__opensans">Log In</p>
        </NavLink>
        <NavLink exact to="/signup">
          <p className="p__opensans">Registration</p>
        </NavLink>
      </>
    );
  };

  return <div className="sm:text-right">{AuthLinks()}</div>;
};

const mapStateToProps = ({ auth: { loggedIn } }) => ({
  loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchCheckAuth: () => dispatch(checkAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tavbar);
