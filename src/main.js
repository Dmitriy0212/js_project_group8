import './css/modern-normalize.css';
import './css/styles.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import initSwiper from './js/popularproducts';

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
