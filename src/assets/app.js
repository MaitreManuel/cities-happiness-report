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
    'public/emojis/male_1.svg',
    'public/emojis/male_2.svg',
    'public/emojis/male_3.svg',
    'public/emojis/female_1.svg',
    'public/emojis/female_2.svg',
    'public/emojis/very_nice.svg',
    'public/emojis/nice.svg',
    'public/emojis/good.svg',
    'public/emojis/medium.svg',
    'public/emojis/bad.svg',
    'public/emojis/very_bad.svg',
  ]);
});
