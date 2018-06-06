import React, { Component } from 'react';

import * as Utils from '../../assets/tools/utils';

class CityWatching extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: new Date().getTime()
    };
  }

  componentDidMount() {
    const me = this;

    Utils.testMatter(document.querySelector('#matter-js-'+ me.state.id), Utils.getLvlData(me.props.criteria.data, me.props.criteria.label), me.props.criteria.label);
    window.addEventListener('resize', () => {
      Utils.testMatter(document.querySelector('#matter-js-'+ me.state.id), Utils.getLvlData(me.props.criteria.data, me.props.criteria.label), me.props.criteria.label);
    });
  }

  render() {
    const me = this,
      city = me.props.city,
      data = me.props.data,
      label = me.props.label,
      template = me.props.children;

    return (
      <div className={ 'CityWatching text-center '+ me.props.classes }>
        <p className="city">{ city }</p>
        <div className="the-data">
          <p className="data">{ data }</p>
          <p className="label">{ label }</p>
        </div>
        { template }
        <div id={ 'matter-js-'+ me.state.id } className="wrapper-matter-js p-absolute"></div>
      </div>
    );
  }
}

export default CityWatching;
