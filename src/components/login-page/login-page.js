import React, { Component }from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './login-page.scss';
import { userActions } from '../../actions';
import withApiService from '../hoc';
import { history } from '../helpers/history';

class LoginPage extends Component {

  constructor (props) {
    super(props);
    this.props.logOut();
  }

  LoginSubmit = (event) => {
    event.preventDefault();
    const user = {
      email: event.target.email.value,
      password: event.target.password.value,
    }

    this.props.login(user);
  }

  render () {
    return (
      <div className="login-page">
        <div className="container">
          <div className="row">
            <div className="offset-3 col-6">
              <h2>Login</h2>
              <form className="sign-up-form" onSubmit={this.LoginSubmit}>
                <input type="email" name="email" placeholder="Email"/>
                <input type="password" name="password" placeholder="password"/>
                <div className="form-group">
                  <button className="btn btn-primary">Login</button>
                  <Link to="/register" className="btn btn-link">Register</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { apiService } = ownProps;

  return {
    login: (user) => {
      apiService.loginUser(user).then((response) => {
        localStorage.setItem('user', JSON.stringify(response.user));
        localStorage.setItem('token', JSON.stringify(`Bearer ${response.token}`));
        dispatch(userActions.Login(response.user));
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
      })
    },
    logOut: () => {dispatch(userActions.logOut())}
  }
};

export default  withApiService()(connect(null, mapDispatchToProps)(LoginPage));
