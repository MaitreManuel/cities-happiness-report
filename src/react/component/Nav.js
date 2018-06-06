import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import swal from 'sweetalert2';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.openMore = this.openMore.bind(this);
  }

  openMore() {
    swal({
      title: 'À propos de ce site',
      html:
        '<p>cc</p>',
      confirmButtonText: '✔ Super',
    });
  }

  render() {
    const me = this;

    return (
      <header id="Nav">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink to="/" id="home" className="navbar-brand">
            <img src="public/logo_data.svg" width="206" height="32" className="d-inline-block align-top" alt="Image de marque happy.cities" />
          </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <a href="javascript:void(0);" id="more" className="nav-item nav-link mx-3">
                <img src="public/more.svg" width="31" height="31" />
              </a>
              <a onClick={ me.openMore } href="javascript:void(0);" id="about" className="nav-item nav-link mx-3">
                <img src="public/about.svg" width="31" height="31" />
              </a>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Nav;
