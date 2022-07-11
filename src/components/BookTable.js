/* eslint-disable arrow-body-style */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';

const BookTable = () => {
  return (
    <div className="w-11/12 max-w-6xl mx-auto mt-8 text-2xl">Book Table</div>
  );
};

export default connect()(BookTable);
