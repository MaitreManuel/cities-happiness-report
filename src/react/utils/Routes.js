import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import Home from './../pages/Home';

class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path={ '/' } component={ Home }></Route>
          {/*<Route component={ NotFound } />*/}
        </Switch>
      </HashRouter>
    );
  }
}


export default Routes;
