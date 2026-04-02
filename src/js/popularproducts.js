import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default async function initSwiper() {
  const slidesData = ['Слайд 1', 'Слайд 2', 'Слайд 3', 'Слайд 4', 'Слайд 5'];
  const slidesList = document.getElementById('slidesList');

  if (!slidesList) return; // защита на случай, если DOM ещё не загрузился

  slidesList.innerHTML = slidesData
    .map(text => `<li class="swiper-slide">${text}</li>`)
    .join('');

  return new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      // 👈 добавили навигацию
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1200: { slidesPerView: 3 },
    },
  });
}
