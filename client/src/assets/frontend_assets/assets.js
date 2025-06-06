// ——— Icons & UI images ———
import basket_icon     from './basket_icon.png';
import logo            from './logo.png';
import header_img      from './header_img.png';
import search_icon     from './search_icon.png';
import add_icon_white  from './add_icon_white.png';
import add_icon_green  from './add_icon_green.png';
import remove_icon_red from './remove_icon_red.png';
import app_store       from './app_store.png';
import play_store      from './play_store.png';
import linkedin_icon   from './linkedin_icon.png';
import facebook_icon   from './facebook_icon.png';
import twitter_icon    from './twitter_icon.png';
import cross_icon      from './cross_icon.png';
import selector_icon   from './selector_icon.png';
import rating_starts   from './rating_starts.png';
import profile_icon    from './profile_icon.png';
import logout_icon     from './logout_icon.png';
import bag_icon        from './bag_icon.png';
import parcel_icon     from './parcel_icon.png';

// ——— Menu category images ———
import menu_1 from './menu_1.png';
import menu_2 from './menu_2.png';
import menu_3 from './menu_3.png';
import menu_4 from './menu_4.png';
import menu_5 from './menu_5.png';
import menu_6 from './menu_6.png';
import menu_7 from './menu_7.png';
import menu_8 from './menu_8.png';

// ——— Dish photos ———
import food_1  from './food_1.png';
import food_2  from './food_2.png';
import food_3  from './food_3.png';
import food_4  from './food_4.png';
import food_5  from './food_5.png';
import food_6  from './food_6.png';
import food_7  from './food_7.png';
import food_8  from './food_8.png';
import food_9  from './food_9.png';
import food_10 from './food_10.png';
import food_11 from './food_11.png';
import food_12 from './food_12.png';
import food_13 from './food_13.png';
import food_14 from './food_14.png';
import food_15 from './food_15.png';
import food_16 from './food_16.png';
import food_17 from './food_17.png';
import food_18 from './food_18.png';
import food_19 from './food_19.png';
import food_20 from './food_20.png';
import food_21 from './food_21.png';
import food_22 from './food_22.png';
import food_23 from './food_23.png';
import food_24 from './food_24.png';
import food_25 from './food_25.png';
import food_26 from './food_26.png';
import food_27 from './food_27.png';
import food_28 from './food_28.png';
import food_29 from './food_29.png';
import food_30 from './food_30.png';
import food_31 from './food_31.png';
import food_32 from './food_32.png';

// ——— Existing exports ———

export const assets = {
  logo,
  basket_icon,
  header_img,
  search_icon,
  add_icon_white,
  add_icon_green,
  remove_icon_red,
  app_store,
  play_store,
  linkedin_icon,
  facebook_icon,
  twitter_icon,
  cross_icon,
  selector_icon,
  rating_starts,
  profile_icon,
  logout_icon,
  bag_icon,
  parcel_icon,
};

export const menu_list = [
  { menu_name: 'Salad',     menu_image: menu_1 },
  { menu_name: 'Rolls',     menu_image: menu_2 },
  { menu_name: 'Deserts',   menu_image: menu_3 },
  { menu_name: 'Sandwich',  menu_image: menu_4 },
  { menu_name: 'Cake',      menu_image: menu_5 },
  { menu_name: 'Pure Veg',  menu_image: menu_6 },
  { menu_name: 'Pasta',     menu_image: menu_7 },
  { menu_name: 'Noodles',   menu_image: menu_8 },
];

export const food_list = [
  { _id: '1',  name: 'Greek salad',       image: food_1,  price: 12, description: '...', category: 'Salad' },
  { _id: '2',  name: 'Veg salad',         image: food_2,  price: 18, description: '...', category: 'Salad' },
  /* … all the way through … */
  { _id: '32', name: 'Cooked Noodles',    image: food_32, price: 15, description: '...', category: 'Noodles' },
];

// —— New export mapping _id → imported image ——  
export const foodImages = {
  1:  food_1,
  2:  food_2,
  3:  food_3,
  4:  food_4,
  5:  food_5,
  6:  food_6,
  7:  food_7,
  8:  food_8,
  9:  food_9,
  10: food_10,
  11: food_11,
  12: food_12,
  13: food_13,
  14: food_14,
  15: food_15,
  16: food_16,
  17: food_17,
  18: food_18,
  19: food_19,
  20: food_20,
  21: food_21,
  22: food_22,
  23: food_23,
  24: food_24,
  25: food_25,
  26: food_26,
  27: food_27,
  28: food_28,
  29: food_29,
  30: food_30,
  31: food_31,
  32: food_32,
};
