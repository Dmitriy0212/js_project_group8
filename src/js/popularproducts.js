import Swiper from 'swiper/bundle';
import 'swiper/css';
import { getPopularProducts } from './popularproducts-pixabay-api.js';

export default async function initSwiper() {
  const sliderWrapper = document.querySelector('.slider__wrapper');
  if (!sliderWrapper) {
    console.error('sliderWrapper не найден!');
    return;
  }

  let slidesData = [];
  try {
    slidesData = await getPopularProducts();
  } catch (error) {
    console.log('Помилка в doStuff:', error);
  }

  if (!Array.isArray(slidesData)) slidesData = [];
  debugger;

  sliderWrapper.innerHTML = a(slidesData);

  const swiper = new Swiper('.slider', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 20,
    pagination: {
      el: '.slider__pagination',
      clickable: true,
      bulletClass: 'slider__bullet',
      bulletActiveClass: 'slider__bullet--active',
    },
    navigation: {
      nextEl: '.slider__btn--next',
      prevEl: '.slider__btn--prev',
    },
    on: {
      init() {
        updateButtons(this);
      },
      slideChange() {
        updateButtons(this);
      },
    },
    breakpoints: {
      300: { slidesPerView: 1, slidesPerGroup: 1 },
      768: { slidesPerView: 2, slidesPerGroup: 2 },
      1200: { slidesPerView: 3, slidesPerGroup: 3 },
    },
  });
}
function updateButtons(swiper) {
  const prevBtn = document.querySelector('.slider__btn--prev');
  const nextBtn = document.querySelector('.slider__btn--next');
  prevBtn.disabled = swiper.isBeginning;
  nextBtn.disabled = swiper.isEnd;
}

function a(slidesData) {
  return slidesData
    .map(slide => {
      const images = Array.isArray(slide.images)
        ? slide.images
        : [slide.images];
      const colors = Array.isArray(slide.color) ? slide.color : [slide.color];
      return images
        .map((nameItem, index) => {
          return `
            <li class="slider__slide swiper-slide">
              <img class="slider__image" src="${nameItem}" alt="${
            slide.name
          }" loading="lazy">
              <h3 class="slider__title">${slide.name}</h3>
              <h3 class="slider__price">${slide.price}</h3>
               <ul class="slider__colors">
              ${colors
                .map(
                  color =>
                    `<li class="slider__color" style="background-color: ${color}"></li>`
                )
                .join('')}
              </ul>
          `;
        })
        .join('');
    })
    .join('');
}
