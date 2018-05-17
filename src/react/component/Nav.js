import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header id="Nav">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink to="/" id="home" className="navbar-brand">
            <img src="public/logo_data.png" width="206" height="32" className="d-inline-block align-top" alt="Image de marque happy.cities" />
          </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <NavLink to="/" id="home" className="nav-item nav-link mx-3">
                <img src="public/more.svg" width="31" height="31" />
              </NavLink>
              <NavLink to="/" id="home" className="nav-item nav-link mx-3">
                <img src="public/about.svg" width="31" height="31" />
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Nav;
