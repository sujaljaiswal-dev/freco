import { MenuItem, Event } from './types';

import heroBackgroundImage from './assets/images/herosection-back.png';
import heroCharacterImage from './assets/images/luffy-p.png';
import animeWallImage from './assets/images/anime_wall_png_1779176192945.png';
import vegetaDrinkImage from './assets/images/drink_vegeta_png_1779176033354.png';
import nezukoDrinkImage from './assets/images/drink_nezuko_png_1779176055807.png';
import piccoloDrinkImage from './assets/images/drink_piccolo_png_1779176072060.png';
import luffyDrinkImage from './assets/images/hero_luffy_cafe_png_1779175997219.png';
import burgerImage from './assets/images/food_burger_png_1779176110082.png';
import pastaImage from './assets/images/food_pasta_png_1779176129033.png';
import siteLogoImage from '../logo.jpg';
import japaneseBadgeImage from '../japanese-badge.png';

export const HERO_BG_IMAGE = heroBackgroundImage;
export const HERO_IMAGE = heroCharacterImage;
export const ANIME_WALL = animeWallImage;
export const SITE_LOGO_IMAGE = siteLogoImage;
export const JAPANESE_BADGE_IMAGE = japaneseBadgeImage;

export const SIGNATURE_DRINKS: MenuItem[] = [
  {
    id: '1',
    name: 'GOKU Americano',
    category: 'Americano',
    price: 228,
    image: '/goku-americano.png',
    character: 'Goku'
  },
  {
    id: '2',
    name: 'VEGETA Espresso',
    category: 'Espresso',
    price: 248,
    image: vegetaDrinkImage,
    character: 'Vegeta'
  },
  {
    id: '3',
    name: 'NEZUKO Cappuccino',
    category: 'Cappuccino',
    price: 258,
    image: nezukoDrinkImage,
    character: 'Nezuko'
  },
  {
    id: '4',
    name: 'PICCOLO Latte',
    category: 'Piccolo Latte',
    price: 248,
    image: piccoloDrinkImage,
    character: 'Piccolo'
  },
  {
    id: '5',
    name: 'LUFFY Pizza Latte',
    category: 'Pizza Latte',
    price: 248,
    image: luffyDrinkImage,
    character: 'Luffy'
  }
];

export const FOOD_MENU: MenuItem[] = [
  {
    id: 'f1',
    name: 'PIZZA',
    category: 'Pizza',
    description: 'Hot & Cheesy',
    price: 0,
    image: '/pizza-c.png'
  },
  {
    id: 'f2',
    name: 'BURGERS',
    category: 'Burgers',
    description: 'Juicy & Loaded',
    price: 0,
    image: '/burger-c.png'
  },
  {
    id: 'f3',
    name: 'NOODLES',
    category: 'Pasta',
    description: 'Creamy & Delicious',
    price: 0,
    image: '/noodles-c.png'
  },
  {
    id: 'f4',
    name: 'SANDWICHES',
    category: 'Sandwiches',
    description: 'Fresh & Flavorful',
    price: 0,
    image: '/sandwich-c.png'
  },
  {
    id: 'f5',
    name: 'FRIES',
    category: 'Fries',
    description: 'Crispy & Perfect',
    price: 0,
    image: '/fries-c.png'
  }
];

export const EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'ANIME NIGHT',
    time: '7:00 PM Onwards',
    day: 'Every Friday',
    icon: 'Calendar',
    image: '/anime-night.png'
  },
  {
    id: 'e2',
    title: 'COSPLAY MEETUP',
    time: '1st Sunday',
    day: 'Every Month',
    icon: 'Ghost',
    image: '/cosplay-meetup.png'
  },
  {
    id: 'e3',
    title: 'GAMING SESSIONS',
    time: '4:00 PM Onwards',
    day: 'Every Saturday',
    icon: 'Gamepad2',
    image: '/gaming-night.png'
  },
  {
    id: 'e4',
    title: 'MOVIE SCREENING',
    time: 'Special Announcements',
    day: '',
    icon: 'Ghost',
    image: '/movie-screening.png'
  }
];

export const SOCIAL_GALLERY = [
  '/goku-americano.png',
  animeWallImage,
  burgerImage,
  pastaImage,
  piccoloDrinkImage
];
