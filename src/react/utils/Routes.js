import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import Home from './../pages/Home';

class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded : false
    };
  }

  componentDidMount() {
    const me = this,
      DELAY_LOADER = 5000;

    if (sessionStorage.getItem('loaded') === 'false' || !sessionStorage.getItem('loaded')) {
      sessionStorage.setItem('loaded', 'false');

      if (sessionStorage.getItem('loaded') === 'falses') {
        setTimeout(() => {
          sessionStorage.setItem('loaded', 'true');
          me.setState({ loaded: true });
        }, DELAY_LOADER);
      }
    }
  }

  renderLoaded() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path={ '/' } component={ Home }></Route>
          {/*<Route component={ NotFound } />*/}
        </Switch>
      </HashRouter>
    );
  }

  renderNotLoaded() {
    return (
      <section id="Loading">
        <div className="logo">

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
