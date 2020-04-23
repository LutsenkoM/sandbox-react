import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../actions';
import { Link } from 'react-router-dom';

import './register-page.scss';

const RegisterPage = ({ register }) => {

  const registerSubmit = (event) => {
    event.preventDefault();
    const user = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      password: event.target.password.value,
    }

    register(user);
  }
    return (
      <div className="sign-up">
        <div className="container">
          <div className="row">
            <div className="offset-3 col-md-6">
              <h2>Registration</h2>
              <form className="sign-up-form" onSubmit={registerSubmit}>
                <div className="d-flex">
                  <input type="text" name="firstName" placeholder="First Name"/>
                  <input type="text" name="lastName" placeholder="Last Name"/>
                </div>
                <input type="email" name="email" placeholder="Email"/>
                <input type="password" name="password" placeholder="password"/>
                <div className="form-group">
                  <button className="btn btn-primary">Register</button>
                  <Link to="/login" className="btn btn-link">Cancel</Link>
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
  register: userActions.Register
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
