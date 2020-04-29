import React, { Component } from 'react';
import './header.scss';
import ProfileDropdown from './profile-dropdown/profile-dropdown'

export default class Header extends Component{

  render () {
    return (
      <header className="header">
        <div className="container d-flex justify-content-between">
          <a href="/"><h1>Sandbox</h1></a>
          <ProfileDropdown />
        </div>
      </header>
    )
  }
}
