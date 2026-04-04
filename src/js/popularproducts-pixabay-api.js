import Swiper from 'swiper/bundle';
import 'swiper/css';

var swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
});
