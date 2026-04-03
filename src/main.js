import './css/modern-normalize.css';
import './css/styles.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import Swiper from 'swiper/bundle';
import 'swiper/css';

const swiperEl = document.getElementById('slidesList');
const slidesData = [
  { img: 'https://picsum.photos/300/200?1', title: 'Слайд 1' },
  { img: 'https://picsum.photos/300/200?2', title: 'Слайд 2' },
  { img: 'https://picsum.photos/300/200?3', title: 'Слайд 3' },
  { img: 'https://picsum.photos/300/200?4', title: 'Слайд 4' },
  { img: 'https://picsum.photos/300/200?5', title: 'Слайд 5' },
];

// Создаём li для каждого слайда
slidesList.innerHTML = slidesData
  .map(
    slide => `
    <li class="swiper-slide">
      <img src="${slide.img}" alt="${slide.title}">
      <h3>${slide.title}</h3>
    </li>
  `
  )
  .join('');
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 3, // Показывать 3 слайда одновременно
  slidesPerGroup: 3, // Листать по 3 слайда
  spaceBetween: 20, // Отступ между слайдами
  pagination: { el: '.swiper-pagination', clickable: false },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // Адаптив
    320: { slidesPerView: 1, slidesPerGroup: 1 },
    768: { slidesPerView: 2, slidesPerGroup: 2 },
    1200: { slidesPerView: 3, slidesPerGroup: 3 },
  },
});
/*
document.addEventListener('DOMContentLoaded', () => {
  initSwiper()
    .then(() => {
      iziToast.success({
        title: 'Успех',
        message: 'Данные успешно загружены',
        position: 'topRight',
      });
    })
    .catch(error => {
      console.error('Ошибка при загрузке данных:', error);

      iziToast.error({
        title: 'Ошибка',
        message: 'Не удалось загрузить данные',
        position: 'topRight',
      });
    });
});
*/
