import React, { Component } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

export default class Header extends Component{

  render () {
    return (
      <header className="header">
        <div className="container d-flex justify-content-between">
          <a href="/"><h1>Sandbox</h1></a>
          <div className="user-menu">
            User menu
          </div>
        </div>
      </header>
    )
  }
}
