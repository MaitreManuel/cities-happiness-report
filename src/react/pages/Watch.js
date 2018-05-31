import React, { Component } from 'react';

import Cities from '../component/Cities';
import Container from '../component/Container';
import Criterias from '../component/Criterias';
import Nav from '../component/Nav';

import * as Utils from '../../assets/tools/utils';

class Watch extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const resize_svg = trigger => {
      const container_svg = document.querySelector('.bg-city'),
        svg = document.querySelector('#svg-city');

      if (svg && container_svg) {
        let dimensions = Utils.resizeSVG(
          { height: svg.getBoundingClientRect().height, width: svg.getBoundingClientRect().width },
          { height: container_svg.getBoundingClientRect().height, width: container_svg.getBoundingClientRect().width },
          trigger
        );

        svg.style.height = dimensions.height +'px';
        svg.style.width = dimensions.width +'px';
        svg.style.left = dimensions.x +'px';
        svg.style.top = dimensions.y +'px';
      }
    };
    const svg = document.querySelector('#svg-city');
    let image = new Image();

    image.onload = () => {
      resize_svg();
    };
    image.src = svg.src;
    window.addEventListener('resize', () => {
      resize_svg();
    });
    document.querySelector('.toggle-criterias').addEventListener('click', () => {
      document.querySelector('.special-present').classList.toggle('open');
    });
  }

  render() {
    const me = this,
      city = me.props.match.params.city;

    return (
      <section id="Watch">
        <Container>
          <Nav/>
          <div className="p-absolute special-present">
            <Criterias classes={ 'dark watch' } switchCriteria={ () => console.log('cc') }>
              <div className="toggle-criterias">
                <span className="open">&gt;</span>
                <span className="close">&times;</span>
              </div>
            </Criterias>
          </div>
          <div className="content p-relative">
            <div className="bg-city p-absolute">
              <img id="svg-city" src="public/bg-city.svg" alt=""/>
            </div>
            <div className="row">
            </div>
          </div>
        </Container>
        <Cities city={ city } />
      </section>
    );
  }
}

export default Watch;
