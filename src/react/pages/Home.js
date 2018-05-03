import React, { Component } from 'react';

import Container from '../component/Container';
import Nav from '../component/Nav';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="Home">
        <Container>
          <Nav/>
          <div className="content">
          </div>
        </Container>
      </section>
    );
  }
}

export default Home;
