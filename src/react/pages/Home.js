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
            <div className="row">
              <div className="col-4 col-criterias">
                <div className="wrapper-list-criterias light">
                  <p className="title">Choisis une thématique :</p>
                  <ul className="criterias">
                    <li>
                      <div className="custom-control custom-radio fadein">
                        <input type="radio" name="theme" value="happiness" className="custom-control-input" id="happiness" defaultChecked={ true } />
                        <label className="custom-control-label" htmlFor="happiness">Happiness</label>
                      </div>
                    </li>
                    <li>
                      <div className="custom-control custom-radio fadein">
                        <input type="radio" name="theme" value="meteo" className="custom-control-input" id="meteo" />
                        <label className="custom-control-label" htmlFor="meteo">Météo</label>
                      </div>
                    </li>
                    <li>
                      <div className="custom-control custom-radio fadein">
                        <input type="radio" name="theme" value="loisirs" className="custom-control-input" id="loisirs" />
                        <label className="custom-control-label" htmlFor="loisirs">Loisirs</label>
                      </div>
                    </li>
                    <li>
                      <div className="custom-control custom-radio fadein">
                        <input type="radio" name="theme" value="population" className="custom-control-input" id="population" />
                        <label className="custom-control-label" htmlFor="population">Population</label>
                      </div>
                    </li>
                    <li>
                      <div className="custom-control custom-radio fadein">
                        <input type="radio" name="theme" value="transports" className="custom-control-input" id="transports" />
                        <label className="custom-control-label" htmlFor="transports">Transports</label>
                      </div>
                    </li>
                    <li>
                      <div className="custom-control custom-radio fadein">
                        <input type="radio" name="theme" value="life-price" className="custom-control-input" id="life-price" />
                        <label className="custom-control-label" htmlFor="life-price">Coût de la vie</label>
                      </div>
                    </li>
                    <li>
                      <div className="custom-control custom-radio fadein">
                        <input type="radio" name="theme" value="crime" className="custom-control-input" id="crime" />
                        <label className="custom-control-label" htmlFor="crime">Crime</label>
                      </div>
                    </li>
                    <li>
                      <div className="custom-control custom-radio fadein">
                        <input type="radio" name="theme" value="chomage" className="custom-control-input" id="chomage" />
                        <label className="custom-control-label" htmlFor="chomage">Chômage</label>
                      </div>
                    </li>
                    <li>
                      <div className="custom-control custom-radio fadein">
                        <input type="radio" name="theme" value="sante" className="custom-control-input" id="sante" />
                        <label className="custom-control-label" htmlFor="sante">Santé</label>
                      </div>
                    </li>
                    <li>
                      <div className="custom-control custom-radio fadein">
                        <input type="radio" name="theme" value="quality" className="custom-control-input" id="quality" />
                        <label className="custom-control-label" htmlFor="quality">Qualité de l{ '\'' }air</label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6">
                <div className="wrapper-french-map">
                  <img className="french-map" src="public/carte_france.svg" alt=""/>
                  <div className="p-absolute cities">

                    <div id="bordeaux-wrapper" className="custom-control custom-radio emoji-radio fadein p-absolute">
                      <input type="radio" name="city" value="bordeaux" className="custom-control-input" id="bordeaux" />
                      <label className="custom-control-label" htmlFor="bordeaux">
                        <img src="public/emojis/good.svg" />
                        <span>Bordeaux</span>
                      </label>
                    </div>
                    <div id="brest-wrapper" className="custom-control custom-radio emoji-radio fadein p-absolute">
                      <input type="radio" name="city" value="brest" className="custom-control-input" id="brest" />
                      <label className="custom-control-label" htmlFor="brest">
                        <img src="public/emojis/good.svg" />
                        <span>Brest</span>
                      </label>
                    </div>
                    <div id="grenoble-wrapper" className="custom-control custom-radio emoji-radio fadein p-absolute">
                      <input type="radio" name="city" value="grenoble" className="custom-control-input" id="grenoble" />
                      <label className="custom-control-label" htmlFor="grenoble">
                        <img src="public/emojis/very_bad.svg" />
                        <span>Grenoble</span>
                      </label>
                    </div>
                    <div id="lille-wrapper" className="custom-control custom-radio emoji-radio fadein p-absolute">
                      <input type="radio" name="city" value="lille" className="custom-control-input" id="lille" />
                      <label className="custom-control-label" htmlFor="lille">
                        <img src="public/emojis/medium.svg" />
                        <span>Lille</span>
                      </label>
                    </div>
                    <div id="limoges-wrapper" className="custom-control custom-radio emoji-radio fadein p-absolute">
                      <input type="radio" name="city" value="limoges" className="custom-control-input" id="limoges" />
                      <label className="custom-control-label" htmlFor="limoges">
                        <img src="public/emojis/bad.svg" />
                        <span>Limoges</span>
                      </label>
                    </div>
                    <div id="lyon-wrapper" className="custom-control custom-radio emoji-radio fadein p-absolute">
                      <input type="radio" name="city" value="lyon" className="custom-control-input" id="lyon" />
                      <label className="custom-control-label" htmlFor="lyon">
                        <img src="public/emojis/good.svg" />
                        <span>Lyon</span>
                      </label>
                    </div>
                    <div id="marseille-wrapper" className="custom-control custom-radio emoji-radio fadein p-absolute">
                      <input type="radio" name="city" value="marseille" className="custom-control-input" id="marseille" />
                      <label className="custom-control-label" htmlFor="marseille">
                        <img src="public/emojis/bad.svg" />
                        <span>Marseille</span>
                      </label>
                    </div>
                    <div id="montpellier-wrapper" className="custom-control custom-radio emoji-radio fadein p-absolute">
                      <input type="radio" name="city" value="montpellier" className="custom-control-input" id="montpellier" />
                      <label className="custom-control-label" htmlFor="montpellier">
                        <img src="public/emojis/very_nice.svg" />
                        <span>Montpellier</span>
                      </label>
                    </div>
                    <div id="nantes-wrapper" className="custom-control custom-radio emoji-radio fadein p-absolute">
                      <input type="radio" name="city" value="nantes" className="custom-control-input" id="nantes" defaultChecked={ true } />
                      <label className="custom-control-label" htmlFor="nantes">
                        <img src="public/emojis/very_nice.svg" />
                        <span>Nantes</span>
                      </label>
                    </div>
                    <div id="paris-wrapper" className="custom-control custom-radio emoji-radio fadein p-absolute">
                      <input type="radio" name="city" value="paris" className="custom-control-input" id="paris" />
                      <label className="custom-control-label" htmlFor="paris">
                        <img src="public/emojis/nice.svg" />
                        <span>Paris</span>
                      </label>
                    </div>
                    <div id="rennes-wrapper" className="custom-control custom-radio emoji-radio fadein p-absolute">
                      <input type="radio" name="city" value="rennes" className="custom-control-input" id="rennes" />
                      <label className="custom-control-label" htmlFor="rennes">
                        <img src="public/emojis/nice.svg" />
                        <span>Rennes</span>
                      </label>
                    </div>
                    <div id="strasbourg-wrapper" className="custom-control custom-radio emoji-radio fadein p-absolute">
                      <input type="radio" name="city" value="strasbourg" className="custom-control-input" id="strasbourg" />
                      <label className="custom-control-label" htmlFor="strasbourg">
                        <img src="public/emojis/good.svg" />
                        <span>Strasbourg</span>
                      </label>
                    </div>

                    <a href="javascript:void(0);" className="btn btn-primary fadein">Visualiser</a>
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

export default Home;
