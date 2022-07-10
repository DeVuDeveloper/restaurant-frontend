/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutUser } from '../../actions/auth';

const Logout = ({ dispatchLogoutUser }) => {
  const history = useHistory();

  const handleClick = () => {
    dispatchLogoutUser().then(() => history.push('/'));
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <p onClick={handleClick}>
      Logout
    </p>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchLogoutUser: () => dispatch(logoutUser()),
});

export default connect(null, mapDispatchToProps)(Logout);
