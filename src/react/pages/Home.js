import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Container from '../component/Container';
import Criterias from '../component/Criterias';
import Nav from '../component/Nav';

let DATAS_GLOBAL = {};

class Home extends Component {
  animateEmojis() {
    const imgs = document.querySelectorAll('#Home img');

    for (let i = 0; i < imgs.length; i++) {
      imgs[i].classList.remove('grow-up');
      setTimeout(() => {
        imgs[i].classList.add('grow-up');
      }, 15);
    }
  }
  constructor(props) {
    super(props);

    DATAS_GLOBAL = props.datas;
    this.state = {
      current_city      : 'nantes',
      current_criteria  : 'happiness',
    };

    this.animateEmojis = this.animateEmojis.bind(this);
    this.getDatas = this.getDatas.bind(this);
    this.setEmoji = this.setEmoji.bind(this);
    this.switchCity = this.switchCity.bind(this);
    this.switchCriteria = this.switchCriteria.bind(this);
  }

  componentDidMount() {
    this.getDatas();
    this.animateEmojis();
  }

  componentDidUpdate(prevProps, prevState) {
    const me = this;
    let prev_city = prevState.current_city,
      current_city = me.state.current_city;

    this.getDatas();
    if (prev_city === current_city) {
      this.animateEmojis();
    }
  }

  getDatas() {
    const me = this,
      datas = DATAS_GLOBAL;
    let city = me.state.current_city,
      criteria = me.state.current_criteria;

    return {
      city: city,
      criteria: criteria,
      data: datas[city][criteria],
    };
  }

  setEmoji() {
    const me = this,
      criteria = me.state.current_criteria;
    let datas = DATAS_GLOBAL;

    for (let data in datas) {
      let result_criteria = datas[data][criteria];

      if (criteria === 'happiness' || criteria === 'meteo' || criteria === 'loisirs' || criteria === 'sante' || criteria === 'transports') {
        if (result_criteria <= 100 && result_criteria > 50) {
          datas[data]['emoji'] = 'public/emojis/very_nice.svg';
        } else if (result_criteria <= 50 && result_criteria > 40) {
          datas[data]['emoji'] = 'public/emojis/nice.svg';
        } else if (result_criteria <= 40 && result_criteria > 30) {
          datas[data]['emoji'] = 'public/emojis/good.svg';
        } else if (result_criteria <= 30 && result_criteria > 20) {
          datas[data]['emoji'] = 'public/emojis/medium.svg';
        } else if (result_criteria <= 20 && result_criteria > 10) {
          datas[data]['emoji'] = 'public/emojis/bad.svg';
        } else if (result_criteria <= 10) {
          datas[data]['emoji'] = 'public/emojis/very_bad.svg';
        }
      } else if (criteria === 'crime' || criteria === 'life_cost') {
        if (result_criteria <= 100 && result_criteria > 95) {
          datas[data]['emoji'] = 'public/emojis/very_nice.svg';
        } else if (result_criteria <= 95 && result_criteria > 94) {
          datas[data]['emoji'] = 'public/emojis/nice.svg';
        } else if (result_criteria <= 94 && result_criteria > 93) {
          datas[data]['emoji'] = 'public/emojis/good.svg';
        } else if (result_criteria <= 93 && result_criteria > 91) {
          datas[data]['emoji'] = 'public/emojis/medium.svg';
        } else if (result_criteria <= 91 && result_criteria > 89) {
          datas[data]['emoji'] = 'public/emojis/bad.svg';
        } else if (result_criteria <= 89) {
          datas[data]['emoji'] = 'public/emojis/very_bad.svg';
        }
      } else if(criteria === 'chomage') {
        if (result_criteria <= 5) {
          datas[data]['emoji'] = 'public/emojis/very_nice.svg';
        } else if (result_criteria >= 5 && result_criteria < 10) {
          datas[data]['emoji'] = 'public/emojis/nice.svg';
        } else if (result_criteria >= 10 && result_criteria < 15) {
          datas[data]['emoji'] = 'public/emojis/good.svg';
        } else if (result_criteria >= 15 && result_criteria < 20) {
          datas[data]['emoji'] = 'public/emojis/medium.svg';
        } else if (result_criteria >= 20 && result_criteria < 25) {
          datas[data]['emoji'] = 'public/emojis/bad.svg';
        } else if (result_criteria >= 30) {
          datas[data]['emoji'] = 'public/emojis/very_bad.svg';
        }
      } else if (criteria === 'air_quality') {
        if (result_criteria <= 16) {
          datas[data]['emoji'] = 'public/emojis/very_nice.svg';
        } else if (result_criteria >= 16 && result_criteria < 25) {
          datas[data]['emoji'] = 'public/emojis/nice.svg';
        } else if (result_criteria >= 25 && result_criteria < 30) {
          datas[data]['emoji'] = 'public/emojis/good.svg';
        } else if (result_criteria >= 30 && result_criteria < 35) {
          datas[data]['emoji'] = 'public/emojis/medium.svg';
        } else if (result_criteria >= 35 && result_criteria < 40) {
          datas[data]['emoji'] = 'public/emojis/bad.svg';
        } else if (result_criteria >= 40) {
          datas[data]['emoji'] = 'public/emojis/very_bad.svg';
        }
      } else if (criteria === 'population') {
        let moy = 6817;

        if (result_criteria <= moy * 0.75) {
          datas[data]['emoji'] = 'public/emojis/very_nice.svg';
        } else if (result_criteria >= moy * 0.75 && result_criteria < moy * 0.87) {
          datas[data]['emoji'] = 'public/emojis/nice.svg';
        } else if (result_criteria >= moy * 0.87 && result_criteria < moy) {
          datas[data]['emoji'] = 'public/emojis/good.svg';
        } else if (result_criteria >= moy && result_criteria < moy * 1.13) {
          datas[data]['emoji'] = 'public/emojis/medium.svg';
        } else if (result_criteria >= 1.13  && result_criteria < moy * 1.25) {
          datas[data]['emoji'] = 'public/emojis/bad.svg';
        } else if (result_criteria >= moy * 1.25) {
          datas[data]['emoji'] = 'public/emojis/very_bad.svg';
        }
      }
    }

    DATAS_GLOBAL = datas;

    return DATAS_GLOBAL;
  }

  switchCity(e) {
    this.setState({ current_city: e.target.value });
  }

  switchCriteria(e) {
    this.setState({ current_criteria: e.target.value });
  }

  render() {
    const me = this;
    let current_data = me.getDatas(),
      datas = me.setEmoji(),
      unity = current_data.criteria === 'population' ? 'hab/km2' : current_data.criteria === 'air_quality' ? 'μg/m3' : '%';

    return (
      <section id="Home">
        <Container>
          <Nav/>
          <div className="content">
            <div className="row">
              <div className="col-4 col-criterias">
                <Criterias classes={ 'light' } switchCriteria={ me.switchCriteria }>
                  <p className="title">Choisis une thématique : <span className="current-data">{ current_data.city +', '+ current_data.criteria +' = '+ current_data.data +' '+ unity }</span></p>
                </Criterias>
              </div>
              <div className="col-6">
                <div className="wrapper-french-map">
                  <img className="french-map" src="public/carte_france.svg" alt=""/>
                  <div className="p-absolute cities">

                    <div id="bordeaux-wrapper" className="custom-control custom-radio emoji-radio fadein p-absolute">
                      <input onChange={ me.switchCity } type="radio" name="city" value="bordeaux" className="custom-control-input" id="bordeaux" />
                      <label className="custom-control-label" htmlFor="bordeaux">
                        <img src={ datas.bordeaux.emoji } />
                        <span>Bordeaux</span>
                      </label>
                    </div>
                    <div id="grenoble-wrapper" className="custom-control custom-radio emoji-radio fadein p-absolute">
                      <input onChange={ me.switchCity } type="radio" name="city" value="grenoble" className="custom-control-input" id="grenoble" />
                      <label className="custom-control-label" htmlFor="grenoble">
                        <img src={ datas.grenoble.emoji } />
                        <span>Grenoble</span>
                      </label>
                    </div>
                    <div id="lille-wrapper" className="custom-control custom-radio emoji-radio fadein p-absolute">
                      <input onChange={ me.switchCity } type="radio" name="city" value="lille" className="custom-control-input" id="lille" />
                      <label className="custom-control-label" htmlFor="lille">
                        <img src={ datas.lille.emoji } />
                        <span>Lille</span>
                      </label>
                    </div>
                    <div id="limoges-wrapper" className="custom-control custom-radio emoji-radio fadein p-absolute">
                      <input onChange={ me.switchCity } type="radio" name="city" value="limoges" className="custom-control-input" id="limoges" />
                      <label className="custom-control-label" htmlFor="limoges">
                        <img src={ datas.limoges.emoji } />
                        <span>Limoges</span>
                      </label>
                    </div>
                    <div id="lyon-wrapper" className="custom-control custom-radio emoji-radio fadein p-absolute">
                      <input onChange={ me.switchCity } type="radio" name="city" value="lyon" className="custom-control-input" id="lyon" />
                      <label className="custom-control-label" htmlFor="lyon">
                        <img src={ datas.lyon.emoji } />
                        <span>Lyon</span>
                      </label>
                    </div>
                    <div id="marseille-wrapper" className="custom-control custom-radio emoji-radio fadein p-absolute">
                      <input onChange={ me.switchCity } type="radio" name="city" value="marseille" className="custom-control-input" id="marseille" />
                      <label className="custom-control-label" htmlFor="marseille">
                        <img src={ datas.marseille.emoji } />
                        <span>Marseille</span>
                      </label>
                    </div>
                    <div id="montpellier-wrapper" className="custom-control custom-radio emoji-radio fadein p-absolute">
                      <input onChange={ me.switchCity } type="radio" name="city" value="montpellier" className="custom-control-input" id="montpellier" />
                      <label className="custom-control-label" htmlFor="montpellier">
                        <img src={ datas.montpellier.emoji } />
                        <span>Montpellier</span>
                      </label>
                    </div>
                    <div id="nantes-wrapper" className="custom-control custom-radio emoji-radio fadein p-absolute">
                      <input onChange={ me.switchCity } type="radio" name="city" value="nantes" className="custom-control-input" id="nantes" defaultChecked={ true } />
                      <label className="custom-control-label" htmlFor="nantes">
                        <img src={ datas.nantes.emoji } />
                        <span>Nantes</span>
                      </label>
                    </div>
                    <div id="paris-wrapper" className="custom-control custom-radio emoji-radio fadein p-absolute">
                      <input onChange={ me.switchCity } type="radio" name="city" value="paris" className="custom-control-input" id="paris" />
                      <label className="custom-control-label" htmlFor="paris">
                        <img src={ datas.paris.emoji } />
                        <span>Paris</span>
                      </label>
                    </div>
                    <div id="rennes-wrapper" className="custom-control custom-radio emoji-radio fadein p-absolute">
                      <input onChange={ me.switchCity } type="radio" name="city" value="rennes" className="custom-control-input" id="rennes" />
                      <label className="custom-control-label" htmlFor="rennes">
                        <img src={ datas.rennes.emoji } />
                        <span>Rennes</span>
                      </label>
                    </div>
                    <div id="quimper-wrapper" className="custom-control custom-radio emoji-radio fadein p-absolute">
                      <input onChange={ me.switchCity } type="radio" name="city" value="quimper" className="custom-control-input" id="quimper" />
                      <label className="custom-control-label" htmlFor="quimper">
                        <img src={ datas.quimper.emoji } />
                        <span>Quimper</span>
                      </label>
                    </div>
                    <div id="strasbourg-wrapper" className="custom-control custom-radio emoji-radio fadein p-absolute">
                      <input onChange={ me.switchCity } type="radio" name="city" value="strasbourg" className="custom-control-input" id="strasbourg" />
                      <label className="custom-control-label" htmlFor="strasbourg">
                        <img src={ datas.strasbourg.emoji } />
                        <span>Strasbourg</span>
                      </label>
                    </div>

                    <NavLink to={ '/watch/'+ me.state.current_city +'/'+ me.state.current_criteria} className="btn btn-primary fadein">Visualiser</NavLink>
                  </div>
                </div>
              </div>
              <div className="col-2"></div>
            </div>
          </div>
        </Container>
      </section>
    );
  }
}

Home.propTypes = {
  datas    : PropTypes.object,
};

export default Home;
