import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from './components/helpers/history';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Header from './components/header';
import LoginPage from './components/login-page/login-page';
import RegisterPage from './components/register-page/register-page';
import HomePage from './components/home-page/home-page';
import { PrivateRoute } from './components/private-route/private-route';

class App extends Component {
  // constructor({apiService}) {
  //   super({apiService});
  // }

  render() {
    return (
      <div className="sandbox-app">
        <Header/>
        {alert.message &&
        <div className={`alert ${alert.type}`}>{alert.message}</div>
        }
        <div className="container">
          <Router history={history}>
            <Switch>
              <PrivateRoute exact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
