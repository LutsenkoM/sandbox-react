import React from 'react';

import './home-page.scss';
import { connect } from 'react-redux';

const HomePage = ({}) => {
  return (
    <div>
      <h1>Welcome!</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    // firstName: state.users.firstName
    // lastName: state.user.lastName,
    // email: state.user.email,
    // password: state.user.password
  };
};

export default connect(mapStateToProps)(HomePage);
