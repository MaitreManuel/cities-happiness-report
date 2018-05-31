import React, { Component } from 'react';

class Criterias extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const me = this,
      switchCriteria = me.props.switchCriteria;

    return (
      <ul className="criterias">
        <li>
          <div className="custom-control custom-radio fadein">
            <input onChange={ switchCriteria } type="radio" name="theme" value="happiness" className="custom-control-input" id="happiness" defaultChecked={ true } />
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
            <input onChange={ switchCriteria } type="radio" name="theme" value="life_cost" className="custom-control-input" id="life-price" />
            <label className="custom-control-label" htmlFor="life-price">Coût de la vie</label>
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
            <input onChange={ switchCriteria } type="radio" name="theme" value="air_quality" className="custom-control-input" id="quality" />
            <label className="custom-control-label" htmlFor="quality">Qualité de l{ '\'' }air</label>
          </div>
        </li>
      </ul>
    );
  }
}

export default Criterias;
