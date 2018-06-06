import './main.scss';

import domready from 'domready';

import * as Utils from './tools/utils';

domready(() => {
  Utils.preloadImages([
    // usual stuff
    'public/logo_data.svg',
    'public/bg-city.svg',
    'public/carte_france.svg',
    'public/more.svg',
    'public/about.svg',
    // emojis
    'public/emojis/very_nice.svg',
    'public/emojis/nice.svg',
    'public/emojis/good.svg',
    'public/emojis/medium.svg',
    'public/emojis/bad.svg',
    'public/emojis/very_bad.svg',
    // happiness & population
    'public/emojis/happiness/male_1.png',
    'public/emojis/happiness/male_2.png',
    'public/emojis/happiness/male_3.png',
    'public/emojis/happiness/male_4.png',
    'public/emojis/happiness/male_5.png',
    'public/emojis/happiness/male_6.png',
    'public/emojis/happiness/male_7.png',
    'public/emojis/happiness/female_1.png',
    'public/emojis/happiness/female_2.png',
    'public/emojis/happiness/female_3.png',
    'public/emojis/happiness/female_4.png',
    // air quality
    'public/emojis/toxic.png',
    // crime
    'public/emojis/crime/knife.png',
    'public/emojis/crime/gun.png',
    'public/emojis/crime/rifle.png',
    // life coast
    'public/emojis/life_cost/atm.png',
    'public/emojis/life_cost/credit_card.png',
    'public/emojis/life_cost/dollars.png',
    'public/emojis/life_cost/euros.png',
    'public/emojis/life_cost/flying_money.png',
    'public/emojis/life_cost/money_bag.png',
    'public/emojis/life_cost/shop.png',
    'public/emojis/life_cost/yens.png',
    // chomage
    'public/emojis/chomage/building.png',
    'public/emojis/chomage/mallet.png',
    // loisirs
    'public/emojis/loisirs/art.png',
    'public/emojis/loisirs/basketball.png',
    'public/emojis/loisirs/bodybuilding.png',
    'public/emojis/loisirs/film.png',
    'public/emojis/loisirs/football.png',
    'public/emojis/loisirs/music.png',
    'public/emojis/loisirs/swimming.png',
    'public/emojis/loisirs/theater.png',
    'public/emojis/loisirs/video_game.png',
    'public/emojis/loisirs/voleyball.png',
    // meteo
    'public/emojis/meteo/cloud.png',
    'public/emojis/meteo/rain.png',
    'public/emojis/meteo/snow.png',
    'public/emojis/meteo/sun.png',
    'public/emojis/meteo/thunder.png',
    // sante
    'public/emojis/sante/sante_1.png',
    'public/emojis/sante/sante_2.png',
    // transports
    'public/emojis/transports/bus.png',
    'public/emojis/transports/ferry.png',
    'public/emojis/transports/metro.png',
    'public/emojis/transports/monorail.png',
    'public/emojis/transports/train.png',
    'public/emojis/transports/tram.png',
  ]);
});
