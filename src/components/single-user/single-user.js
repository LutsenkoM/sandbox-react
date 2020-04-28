import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../actions';
import withApiService from '../hoc';

class SingleUser extends Component {

  componentDidMount () {
    let userId = this.props.match.params.id;
    this.props.getUserData(userId);
  }

  render() {
    const { firstName, lastName, email } = this.props.readUser
    return (
      <div>
        <h1>Single User</h1>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p><strong>{email}</strong></p>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    readUser: state.users
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { apiService } = ownProps;

  return {
    getUserData: (id) => {
      apiService.getSingleUser(id)
        .then((response) => {
          dispatch(userActions.readUserProfile(response));
        })
        .catch((error) => {
          console.log(error);
        })
    }
  };
};

export default  withApiService()(connect(mapStateToProps, mapDispatchToProps)(SingleUser));
