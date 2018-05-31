import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import Home from './../pages/Home';
import Watch from './../pages/Watch';

import DATAS from '../../public/datas';

class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded : false
    };
  }

  componentDidMount() {
    const me = this;

    if (sessionStorage.getItem('loaded') === 'false' || !sessionStorage.getItem('loaded')) {
      sessionStorage.setItem('loaded', 'false');

      if (sessionStorage.getItem('loaded') === 'false') {
        setTimeout(() => {
          document.querySelector('svg.jumping').classList.add('blink');
          setTimeout(() => {
            sessionStorage.setItem('loaded', 'true');
            me.setState({ loaded: true });
          }, 2000);
        }, 6000);
      }
    }
  }

  renderLoaded() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path={ '/' } render={ props => <Home datas={ DATAS } { ...props }/> }></Route>
          <Route exact path={ '/watch/:city' } render={ props => <Watch datas={ DATAS } { ...props }/> }></Route>
          {/*<Route component={ NotFound } />*/}
        </Switch>
      </HashRouter>
    );
  }

  renderNotLoaded() {
    return (
      <section id="Loading">
        <div className="logo">
          <svg className="jumping" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 35 28.3" style={{ enableBackground: 'new 0 0 35 28.3' }} xmlSpace="preserve">
            <style type="text/css">
              { '.st0{fill:#FFCB3A;}' }
            </style>
            <g id="Home" transform="translate(-50.000000, -43.000000)">
              <g id="logo" transform="translate(50.000000, 43.000000)">
                <g id="Group-2" transform="translate(0.000000, 1.000000)">
                  <path id="Shape" className="st0" d="M18.3,24.5c-7.5,0-13.6-6.1-13.6-13.6c0-0.8,0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5
                    c0,5.8,4.7,10.5,10.5,10.5c0.8,0,1.5,0.7,1.5,1.5C19.8,23.8,19.1,24.5,18.3,24.5z"/>
                  <path id="Shape_1_" className="st0" d="M18.3,24.5c-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5c5.8,0,10.5-4.7,10.5-10.5
                    c0-0.8,0.7-1.5,1.5-1.5c0.8,0,1.5,0.7,1.5,1.5C31.8,18.4,25.7,24.5,18.3,24.5z"/>
                  <path id="Path" className="st0" d="M8.6,2.2c0,1.1-0.9,1.9-2,1.9c-1.1,0-1.9-0.9-1.9-1.9s0.9-2,1.9-2C7.7,0.2,8.6,1.1,8.6,2.2z"/>
                  <path id="Path_1_" className="st0" d="M31.8,2.2c0,1.1-0.9,1.9-2,1.9s-1.9-0.9-1.9-1.9s0.9-2,1.9-2S31.8,1.1,31.8,2.2z"/>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </section>
    );
  }

  render() {
    const me = this;

    if (sessionStorage.getItem('loaded') === 'true') {
      return me.renderLoaded();
    } else {
      return me.renderNotLoaded();
    }
  }
}


export default Routes;
