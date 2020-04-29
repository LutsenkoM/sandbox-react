import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../../actions';
import { history } from '../../helpers/history';

const ProfileDropdown = ({user, news, readUser}) => {

  if (!user._id) {
    return (
      <div className="user-menu">
      </div>
    )
  }

  return (
    <div className="user-menu">
      <a href="/login">Log Out</a>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
};

export default  (connect(mapStateToProps, mapDispatchToProps)(ProfileDropdown));
