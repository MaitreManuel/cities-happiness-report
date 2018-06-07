import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import * as Utils from '../../assets/tools/utils';

import CityWatching from '../component/CityWatching';
import Container from '../component/Container';
import Criterias from '../component/Criterias';
import Nav from '../component/Nav';

let DATAS_GLOBAL = {};

class Compare extends Component {
  constructor(props) {
    super(props);

    DATAS_GLOBAL = props.datas;
    this.state = {
      criteria  : props.match.params.criteria,
    };

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
        sessionStorage.setItem('criterias_panel', document.querySelector('.special-present').classList.contains('open'));
      });
    }
  }

  handleClick(e, id) {
    let real_target = document.querySelector(id);

    if (!real_target.getAttribute('data-redirect')) {
      e.preventDefault();
      real_target.setAttribute('data-redirect', 'true');
      Utils.transition(() => {
        real_target.click();
      });
    } else {
      real_target.removeAttribute('data-redirect');
    }
  }

  switchCriteria(e) {
    this.setState({ criteria: e.target.value });
  }

  render() {
    const me = this,
      url_city_1 = me.props.match.params.city_1,
      url_city_2 = me.props.match.params.city_2,
      url_criteria = me.props.match.params.criteria,
      state_criteria = me.state.criteria;
    let current_data_1 = DATAS_GLOBAL[url_city_1][url_criteria],
      current_data_2 = DATAS_GLOBAL[url_city_2][url_criteria],
      label_data = DATAS_GLOBAL['labels'][url_criteria],
      unity = url_criteria === 'population' ? '' : url_criteria === 'air_quality' ? 'μg/m3' : '%';

    if (url_criteria !== state_criteria) {
      return (
        <Redirect to={ '/compare/'+ url_city_1 +'/'+ url_city_2 +'/'+ state_criteria } />
      );
    } else {
      const isOpen = sessionStorage.getItem('criterias_panel') === 'true' ? ' open' : '';

      return (
        <section id="Compare">
          <Container>
            <Nav/>
            <NavLink to={ '/watch/'+ url_city_1 +'/'+ url_criteria } id="return-home" className="btn btn-primary fadein p-absolute return"
              onClick={ (event) => {
                me.handleClick(event, '#return-home');
              } }
            >&larr; Retour</NavLink>
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
                <div className="col-6 border-right">
                  <CityWatching classes={ 'compared' } city={ url_city_1 } data={ current_data_1 +' '+ unity } label={ label_data } criteria={ { label: url_criteria, data: current_data_1 } }>
                  </CityWatching>
                </div>
                <div className="col-6 border-left">
                  <CityWatching classes={ 'compared' } city={ url_city_2 } data={ current_data_2 +' '+ unity } label={ label_data } criteria={ { label: url_criteria, data: current_data_2 } }>
                  </CityWatching>
                </div>
              </div>
            </div>
          </Container>
        </section>
      );
    }
  }
}

Compare.propTypes = {
  datas    : PropTypes.object,
  match    : PropTypes.object,
  params   : PropTypes.object,
};

export default Compare;
