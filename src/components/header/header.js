import React, { Component } from 'react';
import './header.scss';

export default class Header extends Component{

  render () {
    return (
      <header className="header">
        <div className="container d-flex justify-content-between">
          <span>Sandbox</span>
          <div className="user-menu">
            User menu
          </div>
        </div>
      </header>
    )
  }
}
