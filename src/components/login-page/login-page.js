import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './login-page.scss';
import { userActions } from '../../actions';

const LoginPage = ({login}) => {

  const LoginSubmit = (event) => {
    event.preventDefault();
    const user = {
      email: event.target.email.value,
      password: event.target.password.value,
    }

    login(user);
  }

    return (
      <div className="login-page">
        <div className="container">
          <div className="row">
            <div className="offset-3 col-6">
              <h2>Login</h2>
              <form className="sign-up-form" onSubmit={LoginSubmit}>
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

const mapStateToProps = (state) => {
  return {
    // firstName: state.user.firstName,
    // lastName: state.user.lastName,
    // email: state.user.email,
    // password: state.user.password
  };
};

const mapDispatchToProps = {
  login: userActions.Login
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
