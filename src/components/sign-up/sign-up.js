import React, { Component } from 'react';

import './sign-up.scss';

export default class SignUp extends Component{

  render () {
    return (
      <div className="sign-up">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Let's SignUp</h2>
            </div>
            <div className="col-md-6">
              <h2>Sign Up</h2>
              <form className="sign-up-form">
                <div className="d-flex">
                  <input type="text" placeholder="First Name"/>
                  <input type="text" placeholder="Last Name"/>
                </div>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="password"/>
                <button className="btn btn-success">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
