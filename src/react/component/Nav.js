import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header id="Nav" className="my-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink to="/" id="home" className="navbar-brand">
            <span>City Happiness Report</span>
          </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <NavLink to="/" id="home" className="nav-item nav-link mx-3">
                <span>Notre concept</span>
              </NavLink>
              <NavLink to="/" id="home" className="nav-item nav-link mx-3">
                <span>Contact</span>
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Nav;
