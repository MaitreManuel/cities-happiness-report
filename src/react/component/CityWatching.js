import React, { Component } from 'react';

class CityWatching extends Component {
  constructor(props) {
    super(props);
  }

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
      </div>
    );
  }
}

export default CityWatching;
