import React, { Component } from 'react';

// import * as Utils from '../../assets/tools/utils';

class CityWatching extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   Utils.matterJS(document.querySelector('.wrapper-matter-js'));
  // }

  render() {
    const me = this,
      city = me.props.city,
      data = me.props.data,
      label = me.props.label;

    return (
      <div className="CityWatching text-center">
        <p className="city">{ city }</p>
        <div className="the-data">
          <p className="data">{ data }</p>
          <p className="label">{ label }</p>
        </div>
        <div className="wrapper-matter-js p-absolute"></div>
      </div>
    );
  }
}

export default CityWatching;
