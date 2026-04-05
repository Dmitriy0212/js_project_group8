/*import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import { initRatings } from './stars';
import { getFeedbacksList } from './baseUrl';

export async function initFeedbacksSwiper() {
  const sliderWrapper = document.querySelector('.slider__wrapper');

  if (!sliderWrapper) {
    console.error('sliderWrapper не найден!');
    return;
  }

  let slidesData = [];
  try {
    slidesData = await getFeedbacksList(1, 12);
  } catch (error) {
    console.log('Помилка в doStuff:', error);
  }

  if (!Array.isArray(slidesData)) slidesData = [];
  console.log('Полученные данные:', slidesData);

  sliderWrapper.innerHTML = a(slidesData);
  initRatings();
  const swiper = new Swiper('.slider', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 7,
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
      300: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
      768: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 24 },
      1440: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 24 },
    },
  });
}
function updateButtons(swiper) {
  const prevBtn = document.querySelector('.slider__btn--prev');
  const nextBtn = document.querySelector('.slider__btn--next');
  prevBtn.disabled = swiper.isBeginning;
  nextBtn.disabled = swiper.isEnd;
}

async function furnitureItemModal() {
  let slidesData = [];
  try {
    slidesData = await getFurnitureItemById('682f9bbf8acbdf505592ac36');
    console.log('Полученные данные:', slidesData);
  } catch (error) {
    console.log('Помилка в doStuff:', error);
  }
}
function a(slidesData) {
  debugger;
  return slidesData
    .map(slide => {
      return `
            <li class="slider__slide swiper-slide">
           <div class="rating-rate" data-rating="${slide.rate}"></div>          
          <p class="slider__title">${slide.descr}</p>
          <p class="slider__price">${slide.name}</p>
          </div>
          `;
    })
    .join('');
}

const order = {
  name: 'Павло Борисович',
  phone: '380961234568',
  modelId: '682f9bbf8acbdf505592ac36',
  color: '#1212ca',
  comment: "Чекатиму на зворотний зв'язок для уточнення деталей. Дякую!",
};

try {
 
  const result = await postCreateUsersOrder(order);
  console.log('Успех:', result);
} catch (error) {
  console.log('Ошибка:', error.message);
}
*/
import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import { getPopularProducts } from './baseUrl';
import { productmodalRender } from './productmodalrendering';

export async function initSwiper() {
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

  sliderWrapper.innerHTML = a(slidesData);

  sliderWrapper.addEventListener('click', e => {
    const btn = e.target.closest('.slider__btn--disc');

    if (!btn) return;

    const id = btn.dataset.id;

    productmodalRender(id);

    console.log('Нажата кнопка товара с id:', id);
  });

  const swiper = new Swiper('.slider', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 7,
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
      300: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
      768: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 24 },
      1440: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 24 },
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
              <img class="slider__image is-loading" src="${nameItem}" alt="${
            slide.name
          }" loading="lazy" onload="this.classList.remove('is-loading')">
          <div class="slider__info">
          <p class="slider__title">${slide.name}</p>
              
               <ul class="slider__colors">
              ${colors
                .map(
                  color =>
                    `<li class="slider__color" style="background-color: ${color}"></li>`
                )
                .join('')}
              </ul>
              <p class="slider__price">${slide.price} грн</p></div>
              
              <button class="buttonWhite slider__btn--disc" data-id="${
                slide._id
              }">Детальніше</button>
          `;
        })
        .join('');
    })
    .join('');
}
