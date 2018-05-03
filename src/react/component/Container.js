import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const template = this.props.children;

    return (
      <div id="Container">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10">
              { template }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Container.propTypes = {
  children     : PropTypes.node,
};

export default Container;
