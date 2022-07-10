/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';
import { connect } from 'react-redux';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import './signbar.css';

const Signbar = ({ currentUser, loggedIn }) => {
  return (
    <div className="signbar">
      {' '}
      {!loggedIn && (
        <div className="p__opensans">
          <Login />
        </div>
      )}
      <div />
      {!loggedIn && (
        <div className="p__opensans">
          <Signup />
        </div>
      )}
      <span className="usermail">
        {currentUser.email}
      </span>
    </div>
  );
};

const mapStateToProps = ({ auth: { loggedIn, currentUser } }) => {
  return { loggedIn, currentUser };
};

export default connect(mapStateToProps)(Signbar);
