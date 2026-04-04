import './css/modern-normalize.css';
import './css/styles.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { initSwiper } from './js/popularproducts';

document.addEventListener('DOMContentLoaded', () => {
  initSwiper();
});
