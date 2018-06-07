import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import swal from 'sweetalert2';

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
      city          : props.match.params.city,
      criteria      : props.match.params.criteria,
      compare_city  : '',
    };

    this.compareCity = this.compareCity.bind(this);
    this.switchCity = this.switchCity.bind(this);
    this.switchCriteria = this.switchCriteria.bind(this);
  }

  compareCity() {
    swal({
      title: 'Comparer la ville',
      html:
      '<h4>Choisissez une seconde ville</h4>' +
      '<div class="choose-second-city">' +
        '<div class="wrapper-city">' +
          '<div class="custom-control custom-radio fadein">' +
            '<input type="radio" name="city-swal" value="bordeaux" class="custom-control-input" id="bordeaux-swal" checked />' +
            '<label class="custom-control-label" for="bordeaux-swal">Bordeaux</label>' +
          '</div>' +
        '</div>' +
        '<div class="wrapper-city">' +
          '<div class="custom-control custom-radio fadein">' +
            '<input type="radio" name="city-swal" value="grenoble" class="custom-control-input" id="grenoble-swal" />' +
            '<label class="custom-control-label" for="grenoble-swal">Grenoble</label>' +
          '</div>' +
        '</div>' +
        '<div class="wrapper-city">' +
          '<div class="custom-control custom-radio fadein">' +
            '<input type="radio" name="city-swal" value="lille" class="custom-control-input" id="lille-swal" />' +
            '<label class="custom-control-label" for="lille-swal">Lille</label>' +
          '</div>' +
        '</div>' +
        '<div class="wrapper-city">' +
          '<div class="custom-control custom-radio fadein">' +
            '<input type="radio" name="city-swal" value="limoges" class="custom-control-input" id="limoges-swal" />' +
            '<label class="custom-control-label" for="limoges-swal">Limoges</label>' +
          '</div>' +
        '</div>' +
        '<div class="wrapper-city">' +
          '<div class="custom-control custom-radio fadein">' +
            '<input type="radio" name="city-swal" value="lyon" class="custom-control-input" id="lyon-swal" />' +
            '<label class="custom-control-label" for="lyon-swal">Lyon</label>' +
          '</div>' +
        '</div>' +
        '<div class="wrapper-city">' +
          '<div class="custom-control custom-radio fadein">' +
            '<input type="radio" name="city-swal" value="marseille" class="custom-control-input" id="marseille-swal" />' +
            '<label class="custom-control-label" for="marseille-swal">Marseille</label>' +
          '</div>' +
        '</div>' +
        '<div class="wrapper-city">' +
          '<div class="custom-control custom-radio fadein">' +
            '<input type="radio" name="city-swal" value="montpellier" class="custom-control-input" id="montpellier-swal" />' +
            '<label class="custom-control-label" for="montpellier-swal">Montpellier</label>' +
          '</div>' +
        '</div>' +
        '<div class="wrapper-city">' +
          '<div class="custom-control custom-radio fadein">' +
            '<input type="radio" name="city-swal" value="nantes" class="custom-control-input" id="nantes-swal" />' +
            '<label class="custom-control-label" for="nantes-swal">Nantes</label>' +
          '</div>' +
        '</div>' +
        '<div class="wrapper-city">' +
          '<div class="custom-control custom-radio fadein">' +
            '<input type="radio" name="city-swal" value="paris" class="custom-control-input" id="paris-swal" />' +
            '<label class="custom-control-label" for="paris-swal">Paris</label>' +
          '</div>' +
        '</div>' +
        '<div class="wrapper-city">' +
          '<div class="custom-control custom-radio fadein">' +
            '<input type="radio" name="city-swal" value="rennes" class="custom-control-input" id="rennes-swal" />' +
            '<label class="custom-control-label" for="rennes-swal">Rennes</label>' +
          '</div>' +
        '</div>' +
        '<div class="wrapper-city">' +
          '<div class="custom-control custom-radio fadein">' +
            '<input type="radio" name="city-swal" value="quimper" class="custom-control-input" id="quimper-swal" />' +
            '<label class="custom-control-label" for="quimper-swal">Quimper</label>' +
          '</div>' +
        '</div>' +
        '<div class="wrapper-city">' +
          '<div class="custom-control custom-radio fadein">' +
            '<input type="radio" name="city-swal" value="strasbourg" class="custom-control-input" id="strasbourg-swal" />' +
            '<label class="custom-control-label" for="strasbourg-swal">Strasbourg</label>' +
          '</div>' +
        '</div>' +
      '</div>',
      showCancelButton: true,
      cancelButtonText: 'Annuler',
      confirmButtonText: '✔ Ok',
    })
      .then(result => {
        const city_2 = document.querySelector('input[name="city-swal"]:checked');

        if (result.value) {
          this.setState({ compare_city: city_2.value });
        }
      });
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
      compare_city = me.state.compare_city;
    let current_data = DATAS_GLOBAL[url_city][url_criteria],
      label_data = DATAS_GLOBAL['labels'][url_criteria],
      unity = url_criteria === 'population' ? '' : url_criteria === 'air_quality' ? 'μg/m3' : '%';

    if (compare_city) {
      Utils.transition(() => {
        return (
          <Redirect to={ '/compare/'+ state_city +'/'+ compare_city +'/'+ state_criteria } />
        );
      });
    } else if (url_city !== state_city || url_criteria !== state_criteria) {
      return (
        <Redirect to={ '/watch/'+ state_city +'/'+ state_criteria } />
      );
    } else {
      const isOpen = sessionStorage.getItem('criterias_panel') === 'true' ? ' open' : '';

      return (
        <section id="Watch">
          <Container>
            <Nav/>
            <NavLink to="/" id="return-home" className="btn btn-primary fadein p-absolute return"
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
                <div className="col-12">
                  <CityWatching classes={ '' } city={ url_city } data={ current_data +' '+ unity } label={ label_data } criteria={ { label: url_criteria, data: current_data } }>
                    <a href="javascript:void(0);" onClick={ me.compareCity } className="btn btn-primary fadein">Comparer la ville</a>
                  </CityWatching>
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

Watch.propTypes = {
  datas    : PropTypes.object,
  match    : PropTypes.object,
  params   : PropTypes.object,
};

export default Watch;
