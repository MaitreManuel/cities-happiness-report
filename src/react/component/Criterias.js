import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Criterias extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const criteria = this.props.criteria,
      criteria_DOM = document.querySelector('#'+ criteria);

    if (criteria_DOM) {
      criteria_DOM.checked = true;
    } else {
      document.querySelector('#happiness').checked = true;
    }
  }

  render() {
    const me = this,
      props_template = me.props.children,
      classes = me.props.classes,
      switchCriteria = me.props.switchCriteria;

    return (
      <div className={ 'wrapper-list-criterias '+ classes }>
        { props_template }
        <ul className="criterias">
          <li>
            <div className="custom-control custom-radio fadein">
              <input onChange={ switchCriteria } type="radio" name="theme" value="happiness" className="custom-control-input" id="happiness" />
              <label className="custom-control-label" htmlFor="happiness">Happiness</label>
            </div>
          </li>
          <li>
            <div className="custom-control custom-radio fadein">
              <input onChange={ switchCriteria } type="radio" name="theme" value="meteo" className="custom-control-input" id="meteo" />
              <label className="custom-control-label" htmlFor="meteo">Météo</label>
            </div>
          </li>
          <li>
            <div className="custom-control custom-radio fadein">
              <input onChange={ switchCriteria } type="radio" name="theme" value="loisirs" className="custom-control-input" id="loisirs" />
              <label className="custom-control-label" htmlFor="loisirs">Loisirs</label>
            </div>
          </li>
          <li>
            <div className="custom-control custom-radio fadein">
              <input onChange={ switchCriteria } type="radio" name="theme" value="population" className="custom-control-input" id="population" />
              <label className="custom-control-label" htmlFor="population">Population</label>
            </div>
          </li>
          <li>
            <div className="custom-control custom-radio fadein">
              <input onChange={ switchCriteria } type="radio" name="theme" value="transports" className="custom-control-input" id="transports" />
              <label className="custom-control-label" htmlFor="transports">Transports</label>
            </div>
          </li>
          <li>
            <div className="custom-control custom-radio fadein">
              <input onChange={ switchCriteria } type="radio" name="theme" value="life_cost" className="custom-control-input" id="life_cost" />
              <label className="custom-control-label" htmlFor="life_cost">Coût de la vie</label>
            </div>
          </li>
          <li>
            <div className="custom-control custom-radio fadein">
              <input onChange={ switchCriteria } type="radio" name="theme" value="crime" className="custom-control-input" id="crime" />
              <label className="custom-control-label" htmlFor="crime">Crime</label>
            </div>
          </li>
          <li>
            <div className="custom-control custom-radio fadein">
              <input onChange={ switchCriteria } type="radio" name="theme" value="chomage" className="custom-control-input" id="chomage" />
              <label className="custom-control-label" htmlFor="chomage">Chômage</label>
            </div>
          </li>
          <li>
            <div className="custom-control custom-radio fadein">
              <input onChange={ switchCriteria } type="radio" name="theme" value="sante" className="custom-control-input" id="sante" />
              <label className="custom-control-label" htmlFor="sante">Santé</label>
            </div>
          </li>
          <li>
            <div className="custom-control custom-radio fadein">
              <input onChange={ switchCriteria } type="radio" name="theme" value="air_quality" className="custom-control-input" id="air_quality" />
              <label className="custom-control-label" htmlFor="air_quality">Qualité de l{ '\'' }air</label>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

Criterias.propTypes = {
  classes           : PropTypes.string,
  criteria          : PropTypes.string,
  switchCriteria    : PropTypes.func,
};

export default Criterias;
