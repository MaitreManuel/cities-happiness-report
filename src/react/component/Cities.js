import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Cities extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const city = this.props.city;

    document.querySelector('#'+ city).checked = true;
  }

  render() {
    const me = this,
      switchCity = me.props.switchCity;

    return (
      <section id="Cities">
        <div className="wrapper-cities">
          <div className="wrapper-city">
            <div className="custom-control custom-radio fadein">
              <input onChange={ switchCity } type="radio" name="city" value="bordeaux" className="custom-control-input" id="bordeaux" />
              <label className="custom-control-label" htmlFor="bordeaux">Bordeaux</label>
            </div>
          </div>
          <div className="wrapper-city">
            <div className="custom-control custom-radio fadein">
              <input onChange={ switchCity } type="radio" name="city" value="grenoble" className="custom-control-input" id="grenoble" />
              <label className="custom-control-label" htmlFor="grenoble">Grenoble</label>
            </div>
          </div>
          <div className="wrapper-city">
            <div className="custom-control custom-radio fadein">
              <input onChange={ switchCity } type="radio" name="city" value="lille" className="custom-control-input" id="lille" />
              <label className="custom-control-label" htmlFor="lille">Lille</label>
            </div>
          </div>
          <div className="wrapper-city">
            <div className="custom-control custom-radio fadein">
              <input onChange={ switchCity } type="radio" name="city" value="limoges" className="custom-control-input" id="limoges" />
              <label className="custom-control-label" htmlFor="limoges">Limoges</label>
            </div>
          </div>
          <div className="wrapper-city">
            <div className="custom-control custom-radio fadein">
              <input onChange={ switchCity } type="radio" name="city" value="lyon" className="custom-control-input" id="lyon" />
              <label className="custom-control-label" htmlFor="lyon">Lyon</label>
            </div>
          </div>
          <div className="wrapper-city">
            <div className="custom-control custom-radio fadein">
              <input onChange={ switchCity } type="radio" name="city" value="marseille" className="custom-control-input" id="marseille" />
              <label className="custom-control-label" htmlFor="marseille">Marseille</label>
            </div>
          </div>
          <div className="wrapper-city">
            <div className="custom-control custom-radio fadein">
              <input onChange={ switchCity } type="radio" name="city" value="montpellier" className="custom-control-input" id="montpellier" />
              <label className="custom-control-label" htmlFor="montpellier">Montpellier</label>
            </div>
          </div>
          <div className="wrapper-city">
            <div className="custom-control custom-radio fadein">
              <input onChange={ switchCity } type="radio" name="city" value="nantes" className="custom-control-input" id="nantes" />
              <label className="custom-control-label" htmlFor="nantes">Nantes</label>
            </div>
          </div>
          <div className="wrapper-city">
            <div className="custom-control custom-radio fadein">
              <input onChange={ switchCity } type="radio" name="city" value="paris" className="custom-control-input" id="paris" />
              <label className="custom-control-label" htmlFor="paris">Paris</label>
            </div>
          </div>
          <div className="wrapper-city">
            <div className="custom-control custom-radio fadein">
              <input onChange={ switchCity } type="radio" name="city" value="rennes" className="custom-control-input" id="rennes" />
              <label className="custom-control-label" htmlFor="rennes">Rennes</label>
            </div>
          </div>
          <div className="wrapper-city">
            <div className="custom-control custom-radio fadein">
              <input onChange={ switchCity } type="radio" name="city" value="quimper" className="custom-control-input" id="quimper" />
              <label className="custom-control-label" htmlFor="quimper">Quimper</label>
            </div>
          </div>
          <div className="wrapper-city">
            <div className="custom-control custom-radio fadein">
              <input onChange={ switchCity } type="radio" name="city" value="strasbourg" className="custom-control-input" id="strasbourg" />
              <label className="custom-control-label" htmlFor="strasbourg">Strasbourg</label>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Cities.propTypes = {
  city              : PropTypes.string,
  switchCity        : PropTypes.func,
};

export default Cities;
