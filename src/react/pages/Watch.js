import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Cities from '../component/Cities';
import CityWatching from '../component/CityWatching';
import Container from '../component/Container';
import Criterias from '../component/Criterias';
import Nav from '../component/Nav';

import * as Utils from '../../assets/tools/utils';

let DATAS_GLOBAL = {};

class Watch extends Component {
  constructor(props) {
    super(props);

    DATAS_GLOBAL = props.datas;
    this.state = {
      city      : props.match.params.city,
      criteria  : props.match.params.criteria,
    };

    this.switchCity = this.switchCity.bind(this);
    this.switchCriteria = this.switchCriteria.bind(this);
  }

  componentDidMount() {
    this.initTemplate();
  }

  componentDidUpdate() {
    this.initTemplate();
  }

  initTemplate() {
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

    if (svg) {
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
  }

  switchCity(e) {
    this.setState({ city: e.target.value });
  }

  switchCriteria(e) {
    this.setState({ criteria: e.target.value });
  }

  render() {
    const me = this,
      url_city = me.props.match.params.city,
      url_criteria = me.props.match.params.criteria,
      state_city = me.state.city,
      state_criteria = me.state.criteria,
      panel_criterias = document.querySelector('.special-present');
    let current_data = DATAS_GLOBAL[url_city][url_criteria],
      label_data = DATAS_GLOBAL['labels'][url_criteria],
      unity = url_criteria === 'population' ? '' : url_criteria === 'air_quality' ? 'μg/m3' : '%';

    if (url_city !== state_city || url_criteria !== state_criteria) {
      if (panel_criterias) {
        sessionStorage.setItem('criterias_panel', panel_criterias.classList.contains('open'));
      }

      return (
        <Redirect to={ '/watch/'+ state_city +'/'+ state_criteria } />
      );
    } else {
      const isOpen = sessionStorage.getItem('criterias_panel') === 'true' ? ' open' : '';

      return (
        <section id="Watch">
          <Container>
            <Nav/>
            <div className={ 'p-absolute special-present'+ isOpen }>
              <Criterias classes={ 'dark watch add-anim' } switchCriteria={ me.switchCriteria } criteria={ url_criteria } >
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
                <div className="col-12">
                  <CityWatching city={ url_city } data={ current_data +' '+ unity } label={ label_data } criteria={ { label: url_criteria, data: current_data } } />
                </div>
              </div>
            </div>
          </Container>
          <Cities switchCity={ me.switchCity } city={ url_city } />
        </section>
      );
    }
  }
}

export default Watch;
