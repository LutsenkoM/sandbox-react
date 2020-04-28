import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from './components/helpers/history';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Header from './components/header';
import LoginPage from './components/login-page/login-page';
import RegisterPage from './components/register-page/register-page';
import HomePage from './components/home-page/home-page';
import { PrivateRoute } from './components/private-route/private-route';
import SingleUser from './components/single-user/single-user';
import withApiService from './components/hoc/with-api-service';

class App extends Component {

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
              <PrivateRoute path="/:id" component={SingleUser} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default withApiService()(App);
