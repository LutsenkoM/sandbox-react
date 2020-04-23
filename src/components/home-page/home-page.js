import React from 'react';

import './home-page.scss';
import { connect } from 'react-redux';
import { userActions } from '../../actions';

const HomePage = ({ firstName }) => {
  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    // firstName: state.user.firstName
    // lastName: state.user.lastName,
    // email: state.user.email,
    // password: state.user.password
  };
};

export default connect(mapStateToProps)(HomePage);
